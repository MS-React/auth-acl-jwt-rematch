import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../actions';

import './Header.scss';

const Header = ({ logout }) => (
  <header className="header">
    <div className="navbar bg-light box-shadow">
      <div className="container d-flex justify-content-between">
        <a
          className="navbar-brand d-flex align-items-center text-dark"
          href="/"
        >
          CRUD - JWT Application
        </a>

        <button
          className="btn btn-link"
          type="submit"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.Auth.logoutRequest()),
});

export default connect(null, mapDispatchToProps)(Header);
