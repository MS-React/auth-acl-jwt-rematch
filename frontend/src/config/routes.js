const routes = [
  {
    path: '/',
    exact: true,
    page: 'home',
    text: 'Home',
    roles: ['admin', 'member'],
    show: true,
    logged: true,
    protected: true,
  },
  {
    path: '/users',
    exact: true,
    page: 'users',
    text: 'Users',
    roles: ['admin'],
    show: true,
    logged: true,
    protected: true,
  },
  {
    path: '/login',
    exact: false,
    page: 'login',
    text: 'login',
    logged: false,
    show: true,
    protected: false,
  },
];

export default routes;
