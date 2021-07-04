import { ACTION_TYPE } from '../constants';

const getUsers = params => ({
  type: ACTION_TYPE.USERS.GET.REQUEST,
  params,
});

const getUsersOk = users => ({
  type: ACTION_TYPE.USERS.GET.OK,
  users,
});

const getUsersError = error => ({
  type: ACTION_TYPE.USERS.GET.ERROR,
  error,
});

const createUser = user => ({
  type: ACTION_TYPE.USERS.CREATE.REQUEST,
  user,
});

const createUserOk = user => ({
  type: ACTION_TYPE.USERS.CREATE.OK,
  user,
});

const createUserError = error => ({
  type: ACTION_TYPE.USERS.CREATE.ERROR,
  error,
});

const updateUser = user => ({
  type: ACTION_TYPE.USERS.UPDATE.REQUEST,
  user,
});

const updateUserOk = user => ({
  type: ACTION_TYPE.USERS.UPDATE.OK,
  user,
});

const updateUserError = error => ({
  type: ACTION_TYPE.USERS.UPDATE.ERROR,
  error,
});

const deleteUser = user => ({
  type: ACTION_TYPE.USERS.DELETE.REQUEST,
  user,
});

const deleteUserOk = id => ({
  type: ACTION_TYPE.USERS.DELETE.OK,
  id,
});

const deleteUserError = error => ({
  type: ACTION_TYPE.USERS.DELETE.ERROR,
  error,
});

const selectUser = user => ({
  type: ACTION_TYPE.USERS.SELECT,
  selectedUser: user,
});

export default {
  getUsers,
  getUsersOk,
  getUsersError,
  createUser,
  createUserOk,
  createUserError,
  updateUser,
  updateUserOk,
  updateUserError,
  deleteUser,
  deleteUserOk,
  deleteUserError,
  selectUser,
};
