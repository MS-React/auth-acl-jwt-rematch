import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Actions from '../../../actions';
import SignUpForm, { fields } from '../../Common/Form/Templates/SignUp';

import './SignUp.scss';

const SignUp = ({ signUp, signupResponse }) => {
  if (signupResponse) {
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
  signupResponse: PropTypes.bool,
};

SignUp.defaultProps = {
  signupResponse: false,
};

const mapStateToProps = state => ({
  signupResponse: state.Auth.signup,
});

const mapDispatchToProps = dispatch => ({
  signUp: formFields => dispatch(Actions.Auth.signUpRequest({
    name: formFields.name.value,
    email: formFields.email.value,
    password: formFields.password.value,
    phone: formFields.phone.value,
    skypeId: formFields.skypeId.value,
    rol: formFields.name.value,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
