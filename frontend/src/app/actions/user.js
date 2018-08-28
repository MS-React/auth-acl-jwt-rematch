const loginRequest = (name, password) => ({
  type: 'AUTHENTICATION_REQUEST',
  payload: {
    name,
    password,
  },
});

const loginSuccess = ({
  type: 'AUTHENTICATION_SUCCESS',
});

const loginFail = error => ({
  type: 'AUTHENTICATION_FAIL',
  error,
});

const logout = ({
  type: 'AUTHENTICATION_LOGOUT',
});

export default {
  loginRequest,
  loginSuccess,
  loginFail,
  logout,
};
