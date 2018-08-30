import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import FormInput from '../../Common/Form/FormInput';
import Actions from '../../../actions';

import './Login.scss';

class Login extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      logged: PropTypes.bool,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password);
  }

  render() {
    if (this.props.auth.logged) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <section className="login-page">
        <div className="login-page--form">
          <div className="login-form">
            <h1 className="h3 mb-3 font-weight-normal">
              Please sign in
            </h1>
            <form id="login-form" onSubmit={this.handleSubmit}>
              <FormInput
                inputId="username"
                label="Username or email address"
                onChange={this.handleInput}
                type="text"
                name="username"
                placeholder="Username or email address"
                value={this.state.username}
              />
              <FormInput
                inputId="password"
                label="Password"
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
              <span>
                Hint:
                <i>
                  username/password
                </i>
              </span>
              <button className="btn btn-lg btn-primary btn-block" type="submit">
                Sign in
              </button>
            </form>
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
  login: (name, password) => dispatch(Actions.Auth.loginRequest(name, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
