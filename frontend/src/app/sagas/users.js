import { put, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { ACTION_TYPE } from '../constants';
import { apiService } from '../api/ApiService';

export function* getUsers(action) {
  const { params } = action;

  try {
    const response = yield call(apiService.getUsers, { params });
    yield put({ type: ACTION_TYPE.USERS.GET.OK, users: response.docs });
  } catch (e) {
    yield put({ type: ACTION_TYPE.USERS.GET.ERROR, error: e.response });
    throw e;
  }
}

export function* createUser(action) {
  try {
    const response = yield call(apiService.create, { entity: 'users', data: action.user });
    yield put({ type: ACTION_TYPE.USERS.CREATE.OK, user: response });
    toastr.success('User Created', 'Successfully');
  } catch (e) {
    yield put({ type: ACTION_TYPE.USERS.CREATE.ERROR, error: e.response });
    throw e;
  }
}

export function* updateUser(action) {
  try {
    yield call(apiService.update, { entity: 'users', _id: action.user.id, data: action.user });
    yield put({ type: ACTION_TYPE.USERS.UPDATE.OK, user: action.user });
    toastr.success('User Updated', 'Successfully');
  } catch (e) {
    yield put({ type: ACTION_TYPE.USERS.UPDATE.ERROR, error: e.response });
    throw e;
  }
}

export function* deleteUser(action) {
  try {
    yield call(apiService.deleteOne, { entity: 'users', _id: action.user.id });
    yield put({ type: ACTION_TYPE.USERS.DELETE.OK, id: action.user.id });
    toastr.success('User Deleted', 'Successfully');
  } catch (e) {
    yield put({ type: ACTION_TYPE.USERS.DELETE.ERROR, error: e.response });
    throw e;
  }
}
