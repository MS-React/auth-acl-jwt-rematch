import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import FormInput from '../../Common/Form/Elements/Input';
import FormSelect from '../../Common/Form/Elements/Select';

class UsersForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  };

  static defaultProps = {
    errors: {
      name: '',
      email: '',
      password: '',
    },
  };

  render() {
    const { user, onChange, errors } = this.props;
    const isNameInvalid = (errors.name && errors.name !== '');
    const isEmailInvalid = (errors.email && errors.email !== '');
    const isPasswordInvalid = (errors.password && errors.password !== '');
    const emailFeedback = errors.email || '';
    return (
      <div>
        <div className="container">
          <Row>
            <section>
              <form>
                <FormInput
                  inputId="name"
                  label="Name"
                  type="text"
                  onChange={onChange}
                  value={user.name}
                  name="name"
                  placeholder="Full Name"
                  required
                  invalid={isNameInvalid}
                  feedback={errors.name}
                />
                <FormInput
                  inputId="password"
                  label="Password"
                  type="text"
                  onChange={onChange}
                  value={user.password}
                  name="password"
                  placeholder="Password"
                  required
                  invalid={isPasswordInvalid}
                  feedback={errors.password}
                />
                <FormSelect
                  inputId="rol"
                  label="Rol"
                  type="select"
                  onChange={onChange}
                  value={user.rol}
                  name="rol"
                  placeholder="rol"
                  required
                  feedback={errors.rol}
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </FormSelect>
                <FormInput
                  inputId="email"
                  label="Email"
                  type="email"
                  onChange={onChange}
                  value={user.email}
                  name="email"
                  placeholder="Email"
                  required
                  invalid={isEmailInvalid}
                  feedback={emailFeedback}
                />
                <FormInput
                  inputId="skypeId"
                  label="Skype Id"
                  type="text"
                  onChange={onChange}
                  value={user.skypeId}
                  name="skypeId"
                  placeholder="skype Id"
                />
                <FormInput
                  inputId="phone"
                  type="text"
                  label="Phone Number"
                  onChange={onChange}
                  value={user.phone}
                  name="phone"
                  placeholder="Phone Number"
                />
              </form>
            </section>
          </Row>
        </div>
      </div>
    );
  }
}

export default UsersForm;
