import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ routes, user }) => (
  <ul>
    {routes.filter(route => { // eslint-disable-line
      if (user && user.logged) {
        if (route.logged) {
          return route.roles.includes(user.rol);
        }
      } else {
        return !route.logged;
      }
    }).map(route => (
      <li key={`${route.text}-key`}>
        <Link to={route.path}>{route.text}</Link>
      </li>
    ))}
  </ul>
);

NavBar.propTypes = {
  routes: PropTypes.array,
  user: PropTypes.shape({}),
};

NavBar.defaultProps = {
  routes: [],
  user: {},
};

export default NavBar;
