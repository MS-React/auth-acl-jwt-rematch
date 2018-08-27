import React from 'react';
import PropTypes from 'prop-types';

export default class Login extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    // @TODO: add validation
    this.props.login(username, password);
  }

  render() {
    return (
      <div className="login">
        <form id="login-form">
          <div className="input">
            <span>Username</span>
            <input type="text" id="username" onChange={this.handleInput} />
          </div>
          <div className="input">
            <span>Password</span>
            <input type="text" id="password" onChange={this.handleInput} />
          </div>
          <div className="form-action">
            <button type="submit" onClick={this.handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
