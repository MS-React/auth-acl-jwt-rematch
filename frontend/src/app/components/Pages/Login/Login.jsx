import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Actions from '../../../actions';

class Login extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    User: PropTypes.shape({
      logged: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
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
    const { name, password } = this.state;

    this.props.login(name, password);
  }

  render() {
    if (this.props.User.logged) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <div className="login">
        <div className="message">
          {this.props.User.error}
        </div>
        <form id="login-form">
          <div className="input">
            <span>Name</span><br />
            <input type="text" id="name" onChange={this.handleInput} />
          </div>
          <div className="input">
            <span>Password</span><br />
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

const mapStateToProps = state => ({
  User: state.User,
});

const mapDispatchToProps = dispatch => ({
  login: (name, password) => dispatch(Actions.User.loginRequest(name, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
