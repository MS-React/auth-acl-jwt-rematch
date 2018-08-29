import { put, call } from 'redux-saga/effects';
import { apiService } from '../api/ApiService';

export function* loginRequest(action) {
  const { name, password } = action.payload;

  try {
    const response = yield call(apiService.login, { data: { name, password } });
    localStorage.setItem('jwt-token-id', response.jwtSignature);
    yield put({ type: 'AUTHENTICATION_SUCCESS', user: response.payload });
  } catch (e) {
    yield put({ type: 'AUTHENTICATION_FAIL', error: e.response });
  }
}
