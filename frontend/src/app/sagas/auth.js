import { put, call } from 'redux-saga/effects';
import * as jwt from 'jsonwebtoken';
import { toastr } from 'react-redux-toastr';

import { ACTION_TYPE, SETTINGS } from '../constants';
import { apiService } from '../api/ApiService';

export function* loginRequest(action) {
  const { name, password } = action.payload;

  try {
    const response = yield call(apiService.login, { data: { name, password } });
    const tokenPayload = jwt.verify(response.jwtSignature, SETTINGS.JWT.PUBLIC_KEY);
    localStorage.setItem(SETTINGS.JWT.TOKEN_ID, response.jwtSignature);
    yield put({ type: ACTION_TYPE.AUTH.LOGIN.OK, user: tokenPayload.user });
  } catch (e) {
    localStorage.removeItem(SETTINGS.JWT.TOKEN_ID);
    yield put({ type: ACTION_TYPE.AUTH.LOGIN.ERROR, error: e.response });
    throw e;
  }
}

export function* logoutRequest() {
  try {
    localStorage.removeItem(SETTINGS.JWT.TOKEN_ID);
    yield put({ type: ACTION_TYPE.AUTH.LOGOUT.OK });
  } catch (e) {
    yield put({ type: ACTION_TYPE.AUTH.LOGOUT.ERROR, error: e.response });
    throw e;
  }
}

export function* signUpRequest(action) {
  try {
    yield call(apiService.signUp, { data: action.user });
    yield put({ type: ACTION_TYPE.AUTH.SIGNUP.OK });
    toastr.success('Sign Up', 'Successfully. Now you can login.');
  } catch (e) {
    yield put({ type: ACTION_TYPE.AUTH.SIGNUP.ERROR, error: e.response });
    toastr.error('Sign Up', e.response.data.message);
    throw e;
  } finally {
    yield put({ type: ACTION_TYPE.AUTH.SIGNUP.END });
  }
}

export function* forgotpasswordRequest(action) {
  try {
    yield call(apiService.forgotpassword, { data: { email: action.email } });
    yield put({ type: ACTION_TYPE.AUTH.FORGOTPASSWORD.OK });
  } catch (e) {
    yield put({ type: ACTION_TYPE.AUTH.FORGOTPASSWORD.ERROR });
    toastr.error('Error', 'Unable to send Mail, try again later.');
    throw e;
  } finally {
    yield put({ type: ACTION_TYPE.AUTH.FORGOTPASSWORD.END });
  }
}

export function* getUserDataByToken(action) {
  const { token } = action.payload;
  try {
    if (!token) throw new Error('invalid auth data');
    const tokenDecoded = jwt.verify(token, 'somesecretkey');
    yield put({ type: ACTION_TYPE.AUTH.LOGIN.OK, user: tokenDecoded.user });
  } catch (e) {
    localStorage.removeItem(SETTINGS.JWT.TOKEN_ID);
    yield put({ type: ACTION_TYPE.AUTH.LOGIN.ERROR, error: e.response });
  }
}
