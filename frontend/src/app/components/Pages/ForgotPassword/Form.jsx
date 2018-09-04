import React from 'react';
import PropTypes from 'prop-types';

import FormHOC from '../../Common/Form/FormHOC';
import FormInput from '../../Common/Form/Elements/Input';

const ForgotPasswordForm = ({
  onSubmit, onInputChange, fields, errors,
}) => (
  <form id="forgotpassword-form" onSubmit={onSubmit} className="forgotpassword-form">
    <div className="container">
      <FormInput
        inputId="email"
        label="Email"
        type="email"
        onChange={onInputChange}
        value={fields.email.value}
        name="email"
        placeholder="Email"
        required={fields.email.required}
        invalid={errors.email && true}
        feedback={errors.email}
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Send
    </button>
  </form>
);

ForgotPasswordForm.propTypes = {
  fields: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

ForgotPasswordForm.defaultProps = {
  errors: {},
};

export default (FormHOC(ForgotPasswordForm));
