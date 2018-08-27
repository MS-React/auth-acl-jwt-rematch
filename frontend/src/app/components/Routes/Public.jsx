import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

const Public = ({ component: Component, ...props }) => (
  <Route
    exact={props.exact}
    key={`${props.page}-route`}
    path={props.path}
    render={matchedRoute => <Component {...Object.assign({}, matchedRoute, props)} />}
  />
);

Public.defaultProps = {
  exact: false,
  page: '/',
  path: '/',
};

Public.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({}),
  ]).isRequired,
  exact: PropTypes.bool,
  page: PropTypes.string,
  path: PropTypes.string,
};

export default Public;
