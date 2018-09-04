import React from 'react';
import PropTypes from 'prop-types';

import FormHOC from '../../Common/Form/FormHOC';
import FormInput from '../../Common/Form/Elements/Input';

const SignUpForm = ({
  onSubmit, onInputChange, fields, errors,
}) => (
  <form id="signup-form" onSubmit={onSubmit}>
    <div className="container">
      <FormInput
        inputId="name"
        label="Name"
        type="text"
        onChange={onInputChange}
        name="name"
        placeholder="Full Name"
        value={fields.name.value}
        required={fields.name.required}
        invalid={errors.name && true}
        feedback={errors.name}
      />
      <FormInput
        inputId="password"
        label="Password"
        type="text"
        onChange={onInputChange}
        name="password"
        placeholder="Password"
        value={fields.password.value}
        required={fields.password.required}
        invalid={errors.password && true}
        feedback={errors.password}
      />
      <FormInput
        inputId="email"
        label="Email"
        type="email"
        onChange={onInputChange}
        name="email"
        placeholder="Email"
        value={fields.email.value}
        required={fields.email.required}
        invalid={errors.email && true}
        feedback={errors.email}
      />
      <FormInput
        inputId="skypeId"
        label="Skype Id"
        type="text"
        onChange={onInputChange}
        name="skypeId"
        placeholder="skype Id"
        value={fields.skypeId.value}
        required={fields.skypeId.required}
        invalid={errors.skypeId && true}
        feedback={errors.skypeId}
      />
      <FormInput
        inputId="phone"
        type="text"
        label="Phone Number"
        onChange={onInputChange}
        name="phone"
        placeholder="Phone Number"
        value={fields.phone.value}
        required={fields.phone.required}
        invalid={errors.phone && true}
        feedback={errors.phone}
      />
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </div>
  </form>
);

SignUpForm.propTypes = {
  fields: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {
  errors: {},
};

export default (FormHOC(SignUpForm));
