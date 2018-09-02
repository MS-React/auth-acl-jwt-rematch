import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toastr } from 'react-redux-toastr';
import * as authSagas from './auth';
import * as usersSagas from './users';
import { dispatch } from '../store';

export default function* rootSaga() {
  const sagaErrorHandler = generator => (
    function* safeGenerator(...args) {
      try {
        dispatch(showLoading());
        yield generator(...args);
      } catch (e) {
        if (e.response.data.message === 'jwt expired') {
          localStorage.removeItem('jwt-token-id');
          yield put({ type: 'AUTHENTICATION_FAIL', error: e.response });
        }
        toastr.error(e.response.data.name, e.response.data.message);
      } finally {
        dispatch(hideLoading());
      }
    }
  );
  const sagas = { ...authSagas, ...usersSagas };

  yield takeEvery('AUTHENTICATION_REQUEST', sagaErrorHandler(sagas.loginRequest));
  yield takeLatest('AUTHENTICATION_GET_DATA_BY_TOKEN', sagaErrorHandler(sagas.getUserDataByToken));
  yield takeLatest('AUTHENTICATION_LOGOUT_REQUEST', sagaErrorHandler(sagas.logoutRequest));
  yield takeEvery('AUTHENTICATION_SIGNUP_REQUEST', sagaErrorHandler(sagas.signUpRequest));
  yield takeEvery('AUTHENTICATION_FORGOTPASSWORD_REQUEST', sagaErrorHandler(sagas.forgotpasswordRequest));

  yield takeEvery('USERS_GET_ALL_USERS_REQUEST', sagaErrorHandler(sagas.getUsers));
  yield takeEvery('USERS_CREATE_USER_REQUEST', sagaErrorHandler(sagas.createUser));
  yield takeEvery('USERS_UPDATE_USER_REQUEST', sagaErrorHandler(sagas.updateUser));
  yield takeEvery('USERS_DELETE_USER_REQUEST', sagaErrorHandler(sagas.deleteUser));
}
