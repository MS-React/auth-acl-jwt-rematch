const initialState = {
  error: null,
  data: [],
  selectedUser: {},
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_SUCCESS':
      return { ...state, users: action.users };
    case 'USERS_SELECT_USER':
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
};

export default Users;
