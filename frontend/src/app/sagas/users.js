import { put, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { apiService } from '../api/ApiService';
import Actions from '../actions';

export function* getUsers(action) {
  const { params } = action;

  try {
    const response = yield call(apiService.getUsers, { params });
    yield put(Actions.Users.getUsersOk(response.docs));
  } catch (e) {
    yield put(Actions.Users.getUsersError(e.response));
    throw e;
  }
}

export function* createUser(action) {
  try {
    const response = yield call(apiService.create, { entity: 'users', data: action.user });
    yield put(Actions.Users.createUserOk(response));
    toastr.success('User Created', 'Successfully');
  } catch (e) {
    yield put(Actions.Users.createUserError(e.response));
    throw e;
  }
}

export function* updateUser(action) {
  try {
    yield call(apiService.update, { entity: 'users', _id: action.user.id, data: action.user });
    yield put(Actions.Users.updateUserOk(action.user));
    toastr.success('User Updated', 'Successfully');
  } catch (e) {
    yield put(Actions.Users.updateUserError(e.response));
    throw e;
  }
}

export function* deleteUser(action) {
  try {
    yield call(apiService.deleteOne, { entity: 'users', _id: action.user.id });
    yield put(Actions.Users.updateUserOk(action.user.id));
    toastr.success('User Deleted', 'Successfully');
  } catch (e) {
    yield put(Actions.Users.updateUserError(e.response));
    throw e;
  }
}
