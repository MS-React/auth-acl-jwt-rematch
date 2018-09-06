import { ACTION_TYPE } from '../constants';

const initialState = {
  logged: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.AUTH.LOGIN.OK:
      return { ...state, logged: true, ...action.auth };
    case ACTION_TYPE.AUTH.LOGIN.ERROR:
      return { ...state, logged: false, error: action.error };
    case ACTION_TYPE.AUTH.LOGOUT.OK:
      return { ...state, logged: false };
    case ACTION_TYPE.AUTH.LOGOUT.ERROR:
      return { ...state, logged: false, error: action.error };
    case ACTION_TYPE.AUTH.SIGNUP.OK:
      return { ...state, signup: true };
    case ACTION_TYPE.AUTH.SIGNUP.ERROR:
      return { ...state, signup: false, error: action.error };
    case ACTION_TYPE.AUTH.SIGNUP.END:
      return { ...state, signup: false };
    case ACTION_TYPE.AUTH.FORGOTPASSWORD.OK:
      return { ...state, forgotpasswordResponse: { send: true } };
    case ACTION_TYPE.AUTH.FORGOTPASSWORD.ERROR:
      return { ...state, forgotpasswordResponse: { send: false } };
    case ACTION_TYPE.AUTH.FORGOTPASSWORD.END:
      return { ...state, forgotpasswordResponse: { send: false } };
    default:
      return state;
  }
};

export default Auth;
