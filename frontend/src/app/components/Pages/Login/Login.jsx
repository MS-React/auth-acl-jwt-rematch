import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import Actions from '../../../actions';

import './Login.scss';

const loginFields = {
  name: {
    value: '',
    required: true,
    validation: 'isEmpty',
  },
  password: {
    value: '',
    required: true,
    validation: 'isEmpty',
  },
};

const Login = ({ login }) => (
  <section className="login-page">
    <div className="login-page--form">
      <div className="login-form">
        <h1 className="h3 mb-3 font-weight-normal">
          Please sign in
        </h1>
        <LoginForm
          fields={loginFields}
          onSubmit={login}
        />
      </div>
      <div className="authentication-actions">
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgotpassword">Forgot Password</Link>
      </div>
    </div>
  </section>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: formFields => dispatch(Actions.Auth.loginRequest(
    formFields.name.value,
    formFields.password.value,
  )),
});

export default connect(null, mapDispatchToProps)(Login);
