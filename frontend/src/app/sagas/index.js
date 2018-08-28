import { takeEvery } from 'redux-saga/effects';
import * as loginSagas from './login';
import * as usersSagas from './users';

export default function* rootSaga() {
  const sagas = { ...loginSagas, ...usersSagas };

  yield takeEvery('AUTHENTICATION_REQUEST', sagas.loginRequest);
  yield takeEvery('GET_ALL_USERS_REQUEST', sagas.getUsers);
}
