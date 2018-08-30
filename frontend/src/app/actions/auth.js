const loginRequest = (name, password) => ({
  type: 'AUTHENTICATION_REQUEST',
  payload: {
    name,
    password,
  },
});

const signUpRequest = user => ({
  type: 'AUTHENTICATION_SIGNUP_REQUEST',
  user,
});

const logout = () => ({
  type: 'AUTHENTICATION_LOGOUT_REQUEST',
});

const getUserDataByToken = token => ({
  type: 'AUTHENTICATION_GET_DATA_BY_TOKEN',
  payload: {
    token,
  },
});

export default {
  loginRequest,
  logout,
  getUserDataByToken,
  signUpRequest,
};
