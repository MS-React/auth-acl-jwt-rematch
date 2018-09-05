import React from 'react';
import PropTypes from 'prop-types';

import FormHOC from '../../FormHOC';
import FormInput from '../../Elements/Input';

const LoginForm = ({
  onSubmit, onInputChange, fields, errors,
}) => (
  <form id="login-form" onSubmit={onSubmit}>
    <FormInput
      inputId="name"
      label="Username or email address"
      onChange={onInputChange}
      type="text"
      name="name"
      placeholder="Username or email address"
      required={fields.name.required}
      value={fields.name.value}
      invalid={errors.name && true}
      feedback={errors.name}
    />
    <FormInput
      inputId="password"
      label="Password"
      onChange={onInputChange}
      type="password"
      name="password"
      placeholder="Password"
      value={fields.password.value}
      required={fields.password.required}
      invalid={errors.password && true}
      feedback={errors.password}
    />
    <span>
      Hint:
      <i>
        username/password
      </i>
    </span>
    <button
      className="btn btn-lg btn-primary btn-block"
      type="submit"
      // disabled={isSubmitDisabled ? 'disabled' : ''}
    >
      Sign in
    </button>
  </form>
);

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errors: {},
};

export default (FormHOC(LoginForm));
