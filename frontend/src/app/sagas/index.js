import { takeEvery } from 'redux-saga/effects';
import * as authSagas from './auth';
import * as usersSagas from './users';

export default function* rootSaga() {
  const sagas = { ...authSagas, ...usersSagas };

  yield takeEvery('AUTHENTICATION_REQUEST', sagas.loginRequest);
  yield takeEvery('GET_ALL_USERS_REQUEST', sagas.getUsers);
}
