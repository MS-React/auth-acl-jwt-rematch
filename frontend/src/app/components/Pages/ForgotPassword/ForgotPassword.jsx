import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Actions from '../../../actions';
import ForgotPasswordForm from './Form';
import { EMAIL_REGEXP } from '../../../constants/validations';

import './ForgotPassword.scss';

class ForgotPassword extends React.PureComponent {
  static propTypes = {
    forgotpasswordRequest: PropTypes.func.isRequired,
    forgotpasswordResponse: PropTypes.bool,
  };

  static defaultProps = {
    forgotpasswordResponse: false,
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: {
        email: '',
      },
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
    const isValidEmail = EMAIL_REGEXP.test(user.email);
    const errors = {};

    if (!isValidEmail) {
      errors.email = 'Email is invalid';
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

    this.props.forgotpasswordRequest(this.state.user);
  }

  render() {
    const { user, errors } = this.state;
    const { forgotpasswordResponse } = this.props;

    if (forgotpasswordResponse) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <section className="forgotpassword-page">
        <div className="forgotpassword--form">
          <div className="forgotpassword-form">
            <h1 className="h3 mb-3 font-weight-normal">
              Forgot password?
            </h1>
            <h3>
              Write down your email account and we will send you an email with a new password.
            </h3>
            <ForgotPasswordForm
              onChange={this.updateUserState}
              user={user}
              errors={errors}
            />
            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  forgotpasswordResponse: state.Auth.forgotpasswordResponse,
});

const mapDispatchToProps = dispatch => ({
  forgotpasswordRequest: email => dispatch(Actions.Auth.forgotpassword(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
