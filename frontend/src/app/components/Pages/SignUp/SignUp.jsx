import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Actions from '../../../actions';
import SignUpForm from './Form';
// import { EMAIL_REGEXP } from '../../../constants/validations';

import './SignUp.scss';

const EMPTY_USER = {
  name: '',
  email: '',
  password: '',
  phone: '',
  skypeId: '',
  rol: 'member',
};

class SignUp extends React.PureComponent {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    signUpResponse: PropTypes.bool,
  };

  static defaultProps = {
    signUpResponse: false,
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: EMPTY_USER,
    };
  }

  updateUserState = (event) => {
    event.persist();
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [event.target.name]: event.target.value,
      },
    }));
  };

  validateForm = () => {
    const { user } = this.state;
    const isValidUsername = user.name !== '';
    // const isValidEmail = EMAIL_REGEXP.test(user.email);
    const isValidPassword = user.password !== '';
    const errors = {};

    if (!isValidUsername) {
      errors.name = 'User name is required';
    }

    // if (!isValidEmail) {
    //   errors.email = 'Email is invalid';
    // }

    if (!isValidPassword) {
      errors.password = 'Password is invalid';
    }

    this.setState({ errors });

    return errors;
  };

  canSubmitForm = () => {
    const errors = this.validateForm();
    return (Object.keys(errors).length === 0 && errors.constructor === Object);
  };

  handleSubmit() {
    if (!this.canSubmitForm()) {
      return;
    }

    this.props.signUp(this.state.user);
  }

  render() {
    const { user, errors } = this.state;
    const { signUpResponse } = this.props;

    if (signUpResponse) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <section className="signup-page">
        <div className="signup--form">
          <div className="signup-form">
            <h1 className="h3 mb-3 font-weight-normal">
              Sign up form
            </h1>
            <SignUpForm
              onChange={this.updateUserState}
              user={user}
              errors={errors}
            />
            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  signUpResponse: state.Auth.signup,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(Actions.Auth.signUpRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
