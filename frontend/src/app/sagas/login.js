import { put, call } from 'redux-saga/effects';
import { apiService } from '../api/ApiService';

export function* loginRequest(action) {
  const { name, password } = action.payload;

  try {
    const response = yield call(apiService.login, { data: { name, password } });
    // localStorage.setItem(config.ID_TOKEN_NAME, response.id_token);
    yield put({ type: 'AUTHENTICATION_SUCCESS', response });
  } catch (e) {
    yield put({ type: 'AUTHENTICATION_FAIL', error: e.message });
  }
}
