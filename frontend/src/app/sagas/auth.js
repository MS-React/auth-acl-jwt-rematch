import * as jwt from 'jsonwebtoken';
import { put, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { apiService } from '../api/ApiService';

export function* loginRequest(action) {
  const { name, password } = action.payload;

  try {
    const response = yield call(apiService.login, { data: { name, password } });
    const tokenPayload = jwt.decode(response.jwtSignature);
    localStorage.setItem('jwt-token-id', response.jwtSignature);
    yield put({ type: 'AUTHENTICATION_SUCCESS', user: tokenPayload.user });
  } catch (e) {
    localStorage.removeItem('jwt-token-id');
    yield put({ type: 'AUTHENTICATION_FAIL', error: e.response });
    toastr.error(e.response.data.name, e.response.data.message);
  }
}

export function* getUserDataByToken(action) {
  const { token } = action.payload;
  try {
    if (!token) throw new Error('invalid auth data');
    const tokenDecoded = jwt.verify(token, 'somesecretkey');
    yield put({ type: 'AUTHENTICATION_SUCCESS', user: tokenDecoded.user });
  } catch (e) {
    localStorage.removeItem('jwt-token-id');
    yield put({ type: 'AUTHENTICATION_FAIL', error: e.response });
  }
}

export function* logoutRequest() {
  try {
    localStorage.removeItem('jwt-token-id');
    yield put({ type: 'AUTHENTICATION_LOGOUT_SUCCESS' });
  } catch (e) {
    yield put({ type: 'AUTHENTICATION_LOGOUT_FAIL', error: e.response });
  }
}

export function* signUpRequest(action) {
  try {
    yield call(apiService.signUp, { data: action.user });
    yield put({ type: 'AUTHENTICATION_SIGNUP_USER_SUCCESS' });
    toastr.success('Sign Up', 'Successfully. Now you can login.');
  } catch (e) {
    yield put({ type: 'AUTHENTICATION_SIGNUP_USER_FAIL', error: e.response });
    toastr.error('Sign Up', e.response.data.message);
  }
}

export function* forgotpasswordRequest(action) {
  try {
    const response = yield call(apiService.forgotpassword, { data: { email: action.email } });
    yield put({ type: 'AUTHENTICATION_FORGOTPASSWORD_SUCCESS', response });
  } catch (e) {
    yield put({ type: 'AUTHENTICATION_FORGOTPASSWORD_FAIL', error: e.response });
  }
}
