import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import Auth from './auth';
import Users from './users';

export default combineReducers({
  Auth,
  Users,
  toastr: toastrReducer,
});
