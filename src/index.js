const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { createServer } = require('http');
const httpServer = createServer(app);
module.exports = { httpServer };

const SocketSingleton = require('./sockets');

const cors = require('cors');
const {
  RoutePostTickets,
  RouteGetTickets,
  RouteAdminlogin,
  RouteAdminRegister,
  RouteTicketListUp,
  RouteAdminTicketsStatus,
  RouteAdminTicketsInfo,
  RouteTicketsNum,
  RouteOneTicket,
  RoutePostAdminTickets,
  RouteSendMessage,
  RouteAdminEnter,
  RoutePatchTickets,
  RouteTicketsAvail
} = require('./routes');
const { customResponse } = require('./utils/customResponse');
const { errorHandler, errorLoger } = require('./middleware');
const dotenv = require('dotenv');
//커스텀 리스폰스 설정
app.response = Object.create(customResponse);
dotenv.config();
// 포트설정
const PORT = 5000;

const server = async () => {
  try {
    const {
      MONGO_URI,
      JWT_KEY_ADMIN_ACCESS,
      JWT_KEY_MESSAGE,
      JWT_KEY_FRONT_ACCESS,
      GOSROCK_CODE
    } = process.env;

    // 코드베이스로 환경변수 있는지 체크
    if (
      !MONGO_URI ||
      !JWT_KEY_ADMIN_ACCESS ||
      !JWT_KEY_MESSAGE ||
      !JWT_KEY_FRONT_ACCESS ||
      !GOSROCK_CODE
    )
      throw new Error('환경변수가 제대로 설정되지 않음');

    await mongoose.connect(MONGO_URI, {});

    //start socket server
    SocketSingleton.startSocketServer();
    app.use(cors());
    //DB 를 먼저 연결하고 나서 요청을 받아야 오류가 안남! 굿... 좋네여,..
    console.log('MongoDB conneted');
    // app.disable("etag");

    app.use(express.json());
    app.use(RouteTicketsAvail);
    app.use(RoutePatchTickets);
    app.use(RoutePostTickets);
    app.use(RouteGetTickets);
    app.use(RouteAdminlogin);
    app.use(RouteAdminRegister);
    app.use(RouteTicketListUp);
    app.use(RouteAdminTicketsStatus);
    app.use(RouteAdminTicketsInfo);
    app.use(RouteTicketsNum);
    app.use(RouteOneTicket);
    app.use(RoutePostAdminTickets);
    app.use(RouteSendMessage);
    app.use(RouteAdminEnter);

    app.use(errorLoger);
    app.use(errorHandler);

    // 소켓 포함 서버
    httpServer.listen(5000);
  } catch (err) {
    console.log(err);
  }
};

server();
