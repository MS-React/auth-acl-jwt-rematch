import { put, call } from 'redux-saga/effects';
import * as jwt from 'jsonwebtoken';
import { toastr } from 'react-redux-toastr';

import { SETTINGS } from '../constants';
import { apiService } from '../api/ApiService';
import Actions from '../actions';

export function* loginRequest(action) {
  const { name, password } = action.payload;

  try {
    const response = yield call(apiService.login, { data: { name, password } });
    const tokenPayload = jwt.verify(response.jwtSignature, SETTINGS.JWT.PUBLIC_KEY);
    localStorage.setItem(SETTINGS.JWT.TOKEN_ID, response.jwtSignature);
    yield put(Actions.Auth.loginOk(tokenPayload.user));
  } catch (e) {
    localStorage.removeItem(SETTINGS.JWT.TOKEN_ID);
    yield put(Actions.Auth.loginError(e.response));
    throw e;
  }
}

export function* logoutRequest() {
  try {
    localStorage.removeItem(SETTINGS.JWT.TOKEN_ID);
    yield put(Actions.Auth.logoutOk());
  } catch (e) {
    yield put(Actions.Auth.logoutError(e.response));
    throw e;
  }
}

export function* signUpRequest(action) {
  try {
    yield call(apiService.signUp, { data: action.user });
    yield put(Actions.Auth.signUpOk());
    toastr.success('Sign Up', 'Successfully. Now you can login.');
  } catch (e) {
    yield put(Actions.Auth.signUpError(e.response));
    toastr.error('Sign Up', e.response.data.message);
    throw e;
  } finally {
    yield put(Actions.Auth.signUpEnd());
  }
}

export function* forgotpasswordRequest(action) {
  try {
    yield call(apiService.forgotpassword, { data: { email: action.email } });
    yield put(Actions.Auth.forgotpasswordOk());
  } catch (e) {
    yield put(Actions.Auth.forgotpasswordError(e.response));
    toastr.error('Error', 'Unable to send Mail, try again later.');
    throw e;
  } finally {
    yield put(Actions.Auth.forgotpasswordEnd());
  }
}

export function* getUserDataByToken(action) {
  const { token } = action.payload;
  try {
    if (!token) throw new Error('invalid auth data');
    const tokenDecoded = jwt.verify(token, 'somesecretkey');
    yield put(Actions.Auth.loginOk(tokenDecoded.user));
  } catch (e) {
    localStorage.removeItem(SETTINGS.JWT.TOKEN_ID);
    yield put(Actions.Auth.loginError(e.response));
  }
}
