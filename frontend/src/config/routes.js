const routes = [
  {
    path: '/',
    exact: true,
    page: 'home',
    text: 'Home',
    show: true,
    protected: true,
  },
  {
    path: '/login',
    exact: false,
    page: 'login',
    text: 'login',
    show: true,
    protected: false,
  },
];

export default routes;
