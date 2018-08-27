import React from 'react';
import {
  BrowserRouter as Router, Switch, Link,
} from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '../Routes';
import * as Pages from '../Pages';
import routes from '../../../config/routes';

import '../../assets/styles/global.scss';

function createRoute(route, isAuth) {
  const PageComponent = Pages[route.page];
  const Route = route.protected ? PrivateRoute : PublicRoute;
  const props = Object.assign({}, route, isAuth);
  return <Route key={`${route.page}-key`} component={PageComponent} {...props} />;
}

export default class Main extends React.PureComponent {
  state = {
    isAuth: false,
  }

  render() {
    return (
      <main className="game-container">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              {routes.map(route => createRoute(route, this.state.isAuth))}
            </Switch>
          </div>
        </Router>
      </main>
    );
  }
}
