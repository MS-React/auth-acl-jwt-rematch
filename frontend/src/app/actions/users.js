const getUsers = params => ({
  type: 'USERS_GET_ALL_USERS_REQUEST',
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

const deleteUser = user => ({
  type: 'USERS_DELETE_USER_REQUEST',
  user,
});

export default {
  getUsers,
  selectUser,
  createUser,
  deleteUser,
};
