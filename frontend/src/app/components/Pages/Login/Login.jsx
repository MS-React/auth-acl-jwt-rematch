import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import Actions from '../../../actions';

import './Login.scss';

class Login extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      logged: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() { // eslint-disable-line
    if (this.props.auth.logged) {
      return <Redirect to={{ pathname: '/' }} />;
    }
  }

  render() {
    return (
      <section className="login-page">
        <div className="login-page--form">
          <div className="login-form">
            <h1 className="h3 mb-3 font-weight-normal">
              Please sign in
            </h1>
            <LoginForm
              fields={{
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
              }}
              onSubmit={this.props.login}
            />
          </div>
          <div className="authentication-actions">
            <Link to="/signup">Sign Up</Link>
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.Auth,
});

const mapDispatchToProps = dispatch => ({
  login: formFields => dispatch(Actions.Auth.loginRequest(
    formFields.name.value,
    formFields.password.value,
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
