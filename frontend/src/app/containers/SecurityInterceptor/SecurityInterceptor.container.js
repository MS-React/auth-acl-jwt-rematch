import { connect } from 'react-redux';

import Actions from '../../actions';
import SecurityInterceptor from './SecurityInterceptor';

export default connect(
  state => ({
    logged: state.Auth.logged,
    token: localStorage.getItem('jwt-token-id'),
  }), // state
  dispatch => ({
    authenticate: token => dispatch(Actions.Auth.getUserDataByToken(token)),
  }),
)(SecurityInterceptor);
