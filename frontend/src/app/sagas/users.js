import { put, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { apiService } from '../api/ApiService';

export function* getUsers(action) {
  const { params } = action;

  try {
    const response = yield call(apiService.getUsers, { params });
    yield put({ type: 'GET_ALL_USERS_SUCCESS', users: response.docs });
  } catch (e) {
    yield put({ type: 'GET_ALL_USERS_FAIL', error: e.response });
    throw e;
  }
}

export function* createUser(action) {
  try {
    const response = yield call(apiService.create, { entity: 'users', data: action.user });
    yield put({ type: 'CREATE_USER_SUCCESS', user: response });
    toastr.success('User Created', 'Successfully');
  } catch (e) {
    yield put({ type: 'CREATE_USER_FAIL', error: e.response });
    throw e;
  }
}

export function* updateUser(action) {
  try {
    yield call(apiService.update, { entity: 'users', _id: action.user.id, data: action.user });
    yield put({ type: 'UPDATE_USER_SUCCESS', user: action.user });
    toastr.success('User Updated', 'Successfully');
  } catch (e) {
    yield put({ type: 'UPDATE_USER_FAIL', error: e.response });
    throw e;
  }
}

export function* deleteUser(action) {
  try {
    yield call(apiService.deleteOne, { entity: 'users', _id: action.user.id });
    yield put({ type: 'DELETE_USER_SUCCESS', id: action.user.id });
    toastr.success('User Deleted', 'Successfully');
  } catch (e) {
    yield put({ type: 'DELETE_USER_FAIL', error: e.response });
    throw e;
  }
}
