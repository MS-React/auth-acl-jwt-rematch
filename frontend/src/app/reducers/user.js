const initialState = {
  logged: false,
  error: null,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return { ...state, logged: true, user: action.user };
    case 'AUTHENTICATION_FAIL':
      return { ...state, logged: false, error: action.error };
    default:
      return state;
  }
};

export default User;
