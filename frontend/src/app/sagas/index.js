import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toastr } from 'react-redux-toastr';

import { ACTION_TYPE } from '../constants';
import { dispatch } from '../store';
import * as authSagas from './auth';
import * as usersSagas from './users';

export default function* rootSaga() {
  const sagaErrorHandler = generator => (
    function* safeGenerator(...args) {
      try {
        dispatch(showLoading());
        yield generator(...args);
      } catch (e) {
        if (e.response.data.message === 'jwt expired') {
          localStorage.removeItem('jwt-token-id');
          yield put({ type: ACTION_TYPE.AUTH.LOGIN.ERROR, error: e.response });
        }
        toastr.error(e.response.data.name, e.response.data.message);
      } finally {
        dispatch(hideLoading());
      }
    }
  );
  const sagas = { ...authSagas, ...usersSagas };

  yield takeEvery(ACTION_TYPE.AUTH.LOGIN.REQUEST, sagaErrorHandler(sagas.loginRequest));
  yield takeLatest(ACTION_TYPE.AUTH.LOGOUT.REQUEST, sagaErrorHandler(sagas.logoutRequest));
  yield takeEvery(ACTION_TYPE.AUTH.SIGNUP.REQUEST, sagaErrorHandler(sagas.signUpRequest));
  yield takeEvery(
    ACTION_TYPE.AUTH.FORGOTPASSWORD.REQUEST,
    sagaErrorHandler(sagas.forgotpasswordRequest),
  );
  yield takeLatest(ACTION_TYPE.AUTH.TOKEN.REQUEST, sagaErrorHandler(sagas.getUserDataByToken));

  yield takeEvery(ACTION_TYPE.USERS.GET.REQUEST, sagaErrorHandler(sagas.getUsers));
  yield takeEvery(ACTION_TYPE.USERS.CREATE.REQUEST, sagaErrorHandler(sagas.createUser));
  yield takeEvery(ACTION_TYPE.USERS.UPDATE.REQUEST, sagaErrorHandler(sagas.updateUser));
  yield takeEvery(ACTION_TYPE.USERS.DELETE.REQUEST, sagaErrorHandler(sagas.deleteUser));
}
