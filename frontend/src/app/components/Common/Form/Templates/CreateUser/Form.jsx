import React from 'react';
import PropTypes from 'prop-types';

import FormHOC from '../../FormHOC';
import FormInput from '../../Elements/Input';
import FormSelect from '../../Elements/Select';

const UsersForm = ({
  onInputChange, fields, errors,
}) => (
  <div className="container">
    <section>
      <form>
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
        <FormSelect
          inputId="rol"
          label="Rol"
          type="select"
          onChange={onInputChange}
          name="rol"
          placeholder="rol"
          value={fields.rol.value}
          required={fields.rol.required}
          invalid={errors.rol && true}
          feedback={errors.rol}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </FormSelect>
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
          placeholder="Skype Id"
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
      </form>
    </section>
  </div>
);

UsersForm.propTypes = {
  fields: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onInputChange: PropTypes.func.isRequired,
};

UsersForm.defaultProps = {
  errors: {},
};

export default (FormHOC(UsersForm));
