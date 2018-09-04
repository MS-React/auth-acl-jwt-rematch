const initialState = {
  logged: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return { ...state, logged: true, ...action.auth };
    case 'AUTHENTICATION_LOGOUT_FAIL':
    case 'AUTHENTICATION_FAIL':
      return { ...state, logged: false, error: action.error };
    case 'AUTHENTICATION_LOGIN_OK':
      return { ...state, logged: true };
    case 'AUTHENTICATION_LOGOUT_SUCCESS':
      return { ...state, logged: false };
    case 'AUTHENTICATION_SIGNUP_USER_SUCCESS':
      return { ...state, signup: true };
    case 'AUTHENTICATION_SIGNUP_USER_FAIL':
      return { ...state, signup: false, error: action.error };
    case 'AUTHENTICATION_SIGNUP_FINISH':
      return { ...state, signup: false };
    case 'AUTHENTICATION_FORGOTPASSWORD_SUCCESS':
      return { ...state, forgotpasswordResponse: action.response };
    case 'AUTHENTICATION_FORGOTPASSWORD_FAIL':
      return { ...state, forgotpasswordResponse: action.response };
    case 'AUTHENTICATION_FORGOTPASSWORD_FINISH':
      return { ...state, forgotpasswordResponse: action.response };
    default:
      return state;
  }
};

export default Auth;
