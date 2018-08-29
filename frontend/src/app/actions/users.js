const getUsers = params => ({
  type: 'GET_ALL_USERS_REQUEST',
  params,
});

const selectUser = user => ({
  type: 'USERS_SELECT_USER',
  selectedUser: user,
});

const createUser = user => ({
  type: 'USERS_CREATE_USER_REQUEST',
  user,
});

export default {
  getUsers,
  selectUser,
  createUser,
};
