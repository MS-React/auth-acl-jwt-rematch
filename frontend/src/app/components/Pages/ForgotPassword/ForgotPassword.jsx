import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../../../actions';
import ForgotPasswordForm, { fields } from '../../Common/Form/Templates/ForgotPassword';

import './ForgotPassword.scss';

const ForgotPassword = ({ forgotpassword, forgotpasswordResponse }) => {
  // @TODO: Armar como en RocketWagon el tema de el PageContainer que tiene los /page.match/sent..
  if (forgotpasswordResponse.send) {
    return (
      <section className="forgotpassword-page">
        <div className="forgotpassword--form">
          <h1 className="h3 mb-3 font-weight-normal">
            Check your mailbox!
          </h1>
          <h3>
            An email has sent to your email box, please check it.
            Do not forget to look in your darfts.
          </h3>
          <p><Link to="/">Go back Home</Link></p>
        </div>
      </section>
    );
  }

  return (
    <section className="forgotpassword-page">
      <div className="forgotpassword--form">
        <h1 className="h3 mb-3 font-weight-normal">
          Forgot password?
        </h1>
        <h3>
          Write down your email account and we will send you an email with a new password.
        </h3>
        <ForgotPasswordForm
          fields={fields}
          onSubmit={forgotpassword}
        />
      </div>
    </section>
  );
};

ForgotPassword.propTypes = {
  forgotpassword: PropTypes.func.isRequired,
  forgotpasswordResponse: PropTypes.shape({
    send: PropTypes.bool,
  }),
};

ForgotPassword.defaultProps = {
  forgotpasswordResponse: {
    send: false,
  },
};

const mapStateToProps = state => ({
  forgotpasswordResponse: state.Auth.forgotpasswordResponse,
});

const mapDispatchToProps = dispatch => ({
  forgotpassword: formF => dispatch(Actions.Auth.forgotpasswordRequest(formF.email.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
