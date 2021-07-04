import { ACTION_TYPE } from '../constants';

const loginRequest = (name, password) => ({
  type: ACTION_TYPE.AUTH.LOGIN.REQUEST,
  payload: {
    name,
    password,
  },
});

const loginOk = user => ({
  type: ACTION_TYPE.AUTH.LOGIN.OK,
  user,
});

const loginError = error => ({
  type: ACTION_TYPE.AUTH.LOGIN.ERROR,
  error,
});

const logoutRequest = () => ({
  type: ACTION_TYPE.AUTH.LOGOUT.REQUEST,
});

const logoutOk = () => ({
  type: ACTION_TYPE.AUTH.LOGOUT.OK,
});

const logoutError = error => ({
  type: ACTION_TYPE.AUTH.LOGOUT.ERROR,
  error,
});

const signUpRequest = user => ({
  type: ACTION_TYPE.AUTH.SIGNUP.REQUEST,
  user,
});

const signUpOk = () => ({
  type: ACTION_TYPE.AUTH.SIGNUP.OK,
});

const signUpError = error => ({
  type: ACTION_TYPE.AUTH.SIGNUP.ERROR,
  error,
});

const signUpEnd = () => ({
  type: ACTION_TYPE.AUTH.SIGNUP.END,
});

const forgotpasswordRequest = email => ({
  type: ACTION_TYPE.AUTH.FORGOTPASSWORD.REQUEST,
  email,
});

const forgotpasswordOk = () => ({
  type: ACTION_TYPE.AUTH.FORGOTPASSWORD.OK,
});

const forgotpasswordError = error => ({
  type: ACTION_TYPE.AUTH.FORGOTPASSWORD.ERROR,
  error,
});

const forgotpasswordEnd = () => ({
  type: ACTION_TYPE.AUTH.FORGOTPASSWORD.END,
});

const getUserDataByToken = token => ({
  type: ACTION_TYPE.AUTH.TOKEN.REQUEST,
  payload: {
    token,
  },
});

export default {
  loginRequest,
  loginOk,
  loginError,
  logoutRequest,
  logoutOk,
  logoutError,
  signUpRequest,
  signUpOk,
  signUpError,
  signUpEnd,
  forgotpasswordRequest,
  forgotpasswordOk,
  forgotpasswordError,
  forgotpasswordEnd,
  getUserDataByToken,
};
