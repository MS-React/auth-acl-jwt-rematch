const initialState = {
  logged: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return { ...state, logged: true, ...action.auth };
    case 'AUTHENTICATION_FAIL':
      return { ...state, logged: false, error: action.error };
    default:
      return state;
  }
};

export default Auth;