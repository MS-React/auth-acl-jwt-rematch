import { ACTION_TYPE } from '../constants';

const loginRequest = (name, password) => ({
  type: ACTION_TYPE.AUTH.LOGIN.REQUEST,
  payload: {
    name,
    password,
  },
});

const logoutRequest = () => ({
  type: ACTION_TYPE.AUTH.LOGOUT.REQUEST,
});

const signUpRequest = user => ({
  type: ACTION_TYPE.AUTH.SIGNUP.REQUEST,
  user,
});

const forgotpasswordRequest = email => ({
  type: ACTION_TYPE.AUTH.FORGOTPASSWORD.REQUEST,
  email,
});

const getUserDataByToken = token => ({
  type: ACTION_TYPE.AUTH.TOKEN.REQUEST,
  payload: {
    token,
  },
});

export default {
  loginRequest,
  logoutRequest,
  getUserDataByToken,
  signUpRequest,
  forgotpasswordRequest,
};
