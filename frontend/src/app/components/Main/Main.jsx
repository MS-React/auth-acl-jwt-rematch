import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from '../Common/PrivateRoute';
import LoginPage from '../Pages/Login';
import NotFoundPage from '../Pages/NotFound';
import HomePage from '../Pages/Home';

const Main = ({ auth }) => (
  <main className="app-container">
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} isAuthenticated={auth.logged} />
        <Route path="/login" component={LoginPage} isAuthenticated={auth.logged} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </main>
);

Main.propTypes = {
  auth: PropTypes.shape({
    logged: PropTypes.bool,
  }),
};

Main.defaultProps = {
  auth: {
    logged: false,
  },
};

const mapStateToProps = state => ({
  auth: state.Auth,
});

export default connect(mapStateToProps)(Main);
