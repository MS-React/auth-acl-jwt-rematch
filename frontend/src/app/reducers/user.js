const initialState = {
  logged: false,
  error: null,
  data: [],
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return { ...state, logged: true, ...action.user };
    case 'AUTHENTICATION_FAIL':
      return { ...state, logged: false, error: action.error };
    case 'GET_ALL_USERS_SUCCESS':
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default User;
