import React from 'react';
import PropTypes from 'prop-types';

import {
  Route, Redirect,
} from 'react-router-dom';

const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchedRoute => rest.isAuthenticated // eslint-disable-line
      ? (
        <Component {...Object.assign({}, matchedRoute, rest.route)} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: matchedRoute.location },
          }}
        />
      )
    }
  />
);

Private.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({}),
  ]).isRequired,
};

export default Private;
