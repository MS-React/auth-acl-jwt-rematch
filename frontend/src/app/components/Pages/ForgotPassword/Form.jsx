import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import FormInput from '../../Common/Form/Elements/Input';

class ForgotPasswordForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.shape({
      email: PropTypes.string,
    }),
  };

  static defaultProps = {
    errors: {
      email: '',
    },
  };

  render() {
    const { user, onChange, errors } = this.props;
    // const isEmailInvalid = (errors.email && errors.email !== '');
    return (
      <div>
        <div className="container">
          <Row>
            <section>
              <form>
                <FormInput
                  inputId="email"
                  label="Email"
                  type="email"
                  onChange={onChange}
                  value={user.email}
                  name="email"
                  placeholder="Email"
                  required
                  feedback={errors.email}
                />
              </form>
            </section>
          </Row>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordForm;
