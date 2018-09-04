import { ACTION_TYPE } from '../constants';

const getUsers = params => ({
  type: ACTION_TYPE.USERS.GET.REQUEST,
  params,
});

const createUser = user => ({
  type: ACTION_TYPE.USERS.CREATE.REQUEST,
  user,
});

const updateUser = user => ({
  type: ACTION_TYPE.USERS.UPDATE.REQUEST,
  user,
});

const deleteUser = user => ({
  type: ACTION_TYPE.USERS.DELETE.REQUEST,
  user,
});

const selectUser = user => ({
  type: ACTION_TYPE.USERS.SELECT,
  selectedUser: user,
});

export default {
  getUsers,
  selectUser,
  createUser,
  updateUser,
  deleteUser,
};
