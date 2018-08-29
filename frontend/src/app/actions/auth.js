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

export default {
  loginRequest,
  logout,
};
