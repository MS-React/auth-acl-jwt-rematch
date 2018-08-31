import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { loadingBarReducer } from 'react-redux-loading-bar';
import Auth from './auth';
import Users from './users';

export default combineReducers({
  Auth,
  Users,
  toastr: toastrReducer,
  loadingBar: loadingBarReducer,
});
