import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Actions from '../../../actions';
import SignUpForm from './Form';

import './SignUp.scss';

const fields = {
  name: {
    value: '',
    required: true,
    validation: 'isEmpty',
  },
  email: {
    value: '',
    required: true,
    validation: 'isValidEmail',
  },
  password: {
    value: '',
    required: true,
    validation: 'isEmpty',
  },
  phone: {
    value: '',
  },
  skypeId: {
    value: '',
  },
  rol: {
    value: 'member',
  },
};

const SignUp = ({ signUpResponse, signUp }) => {
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
            fields={fields}
            onSubmit={signUp}
          />
        </div>
      </div>
    </section>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  signUpResponse: PropTypes.bool,
};

SignUp.defaultProps = {
  signUpResponse: false,
};

const mapStateToProps = state => ({
  signUpResponse: state.Auth.signup,
});

const mapDispatchToProps = dispatch => ({
  signUp: formFields => { // eslint-disable-line
    const user = {
      name: formFields.name.value,
      email: formFields.email.value,
      password: formFields.password.value,
      phone: formFields.phone.value,
      skypeId: formFields.skypeId.value,
      rol: formFields.name.value,
    };
    dispatch(Actions.Auth.signUpRequest(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
