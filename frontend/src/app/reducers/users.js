const initialState = {
  error: null,
  data: [],
  selectedUser: {},
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_SUCCESS':
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default Users;
