class ErrorMessage {
  constructor() {}
  /* 검증 관련 */ //-----------------------------------------------------

  /**
   * 검증오류
   */
  VALIDATION_ERROR = '검증오류';

  /* 네이버 SMS API 관련 */ //-----------------------------------------------------

  /**
   * 전송 실패
   */
  NAVER_FAILED = '네이버 문자 전송 실패';
  /**
   * 서버상 인증키 값이 잘못 들어가면 오류
   */
  NAVER_FORBIDDEN = '네이버 요청 거부';
  /**
   * 서버상 인증키 값이 잘못 들어가면 오류
   */
  NAVER_UNAUTHORIZED = '네이버 인증키 오류';
  /**
   * 수신 / 발신번호 지정 오류
   */
  NAVER_NOT_FOUND = '네이버 전화번호 오류';
  /**
   * 미디어 타입 지정 오류
   */
  NAVER_MEDIA_TYPE_ERROR = '네이버 미디어 지정 오류';
  /**
   * 요청 초과
   */
  NAVER_TOO_MANY_REQUESTS = '네이버 요청 초과';

  /* 토큰 관련 */ //-----------------------------------------------------

  /**
   * 토큰 없음
   */
  TOKEN_NOT_EXIST = '토큰 없음';

  /**
   * 토큰 시간 만료
   */
  TOKEN_EXPIRED = '토큰 시간 만료';

  /**
   * 토큰 오류
   */
  TOKEN_INVALID = '토큰 오류';

  /* 유저 상태 관련 */ //-----------------------------------------------------

  /**
   * 금지된유저
   */
  FORBIDDEN_ERROR = '금지된유저';

  /**
   * 비활된유저
   */
  STOP_USER_ERROR = '비활된유저';

  /* 서버 관련  */ //-----------------------------------------------------

  /**
   * 서버내부오류
   */
  INTERNAL_SERVER_ERROR = '서버내부오류';

  /**
   * 레빗엠큐오류
   */
  RABBIT_SERVER_ERROR = '메시지큐오류';
}

module.exports = new ErrorMessage();
