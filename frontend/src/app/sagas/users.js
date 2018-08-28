import { put, call } from 'redux-saga/effects';
import { apiService } from '../api/ApiService';

export function* getUsers(action) {
  const { params } = action;

  try {
    const response = yield call(apiService.getUsers, { params });
    yield put({ type: 'GET_ALL_USERS_SUCCESS', users: response.docs });
  } catch (e) {
    yield put({ type: 'GET_ALL_USERS_FAIL', error: e.response });
  }
}
