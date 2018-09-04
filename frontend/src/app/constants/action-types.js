export const ACTION_TYPE = {
  AUTH: {
    LOGIN: {
      REQUEST: '[auth] login request',
      OK: '[auth] login ok',
      ERROR: '[auth] login error',
    },
    LOGOUT: {
      REQUEST: '[auth] logout request',
      OK: '[auth] logout ok',
      ERROR: '[auth] logout error',
    },
    SIGNUP: {
      REQUEST: '[auth] signup request',
      OK: '[auth] signup ok',
      ERROR: '[auth] signup error',
      END: '[auth] signup end',
    },
    FORGOTPASSWORD: {
      REQUEST: '[auth] forgotpassword request',
      OK: '[auth] forgotpassword ok',
      ERROR: '[auth] forgotpassword error',
      END: '[auth] forgotpassword end',
    },
    TOKEN: {
      REQUEST: '[auth] token request',
    },
  },
  USERS: {
    GET: {
      REQUEST: '[users] get request',
      OK: '[users] get ok',
      ERROR: '[users] get error',
    },
    CREATE: {
      REQUEST: '[users] create request',
      OK: '[users] create ok',
      ERROR: '[users] create error',
    },
    UPDATE: {
      REQUEST: '[users] update request',
      OK: '[users] update ok',
      ERROR: '[users] update error',
    },
    DELETE: {
      REQUEST: '[users] delete request',
      OK: '[users] delete ok',
      ERROR: '[users] delete error',
    },
    SELECT: '[users] selected User',
  },
};
