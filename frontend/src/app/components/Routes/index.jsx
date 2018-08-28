import React from 'react';
import Private from './Private';
import Public from './Public';
import * as Pages from '../Pages';

export const createRoute = (route, isAuth) => {
  const PageComponent = Pages[route.page];
  const Route = route.protected ? Private : Public;
  const props = Object.assign({}, route, { isAuthenticated: isAuth });
  return <Route key={`${route.page}-key`} component={PageComponent} {...props} />;
};
