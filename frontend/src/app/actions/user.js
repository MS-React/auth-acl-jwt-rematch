const loginRequest = (name, password) => ({
  type: 'AUTHENTICATION_REQUEST',
  payload: {
    name,
    password,
  },
});

const logout = ({
  type: 'AUTHENTICATION_LOGOUT',
});

const getUsers = params => ({
  type: 'GET_ALL_USERS_REQUEST',
  params,
});

export default {
  loginRequest,
  logout,
  getUsers,
};
