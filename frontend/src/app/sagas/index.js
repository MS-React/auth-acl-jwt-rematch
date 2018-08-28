import { takeEvery } from 'redux-saga/effects';
import * as loginSagas from './login';

export default function* rootSaga() {
  const sagas = { ...loginSagas };

  yield takeEvery('AUTHENTICATION_REQUEST', sagas.loginRequest);
}
