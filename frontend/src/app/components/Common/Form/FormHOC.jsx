import React from 'react';
import PropTypes from 'prop-types';

import * as Validations from './Validations';

const FormHOC = FormComponent => (
  class FormParent extends React.PureComponent {
    static propTypes = {
      fields: PropTypes.object.isRequired,
      onSubmit: PropTypes.func.isRequired,
      isSubmitDisabled: PropTypes.bool,
    };

    static defaultProps = {
      isSubmitDisabled: true,
    }

    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        fields: this.props.fields,
        errors: {},
      };
    }

    validateForm = () => {
      const errors = {};
      const { fields } = this.state;

      Object.keys(fields).forEach(field => { // eslint-disable-line
        const fieldI = fields[field];
        if (fieldI.validation && !Validations[fieldI.validation](fieldI.value)) {
          errors[field] = `${field[0].toUpperCase() + field.slice(1)} is invalid`;
        }
      });

      this.setState({ errors });
      return errors;
    };

    canSubmitForm = () => {
      const errors = this.validateForm();
      return (Object.keys(errors).length === 0 && errors.constructor === Object);
    };

    handleInputChange(event) {
      event.persist();
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [event.target.name]: {
            ...prevState.fields[event.target.name],
            value: event.target.value,
          },
        },
      }));
    }

    handleSubmit(event) {
      event.preventDefault();
      if (!this.canSubmitForm()) {
        return;
      }

      this.props.onSubmit(this.state.fields);
    }

    render() {
      const { fields, errors } = this.state;

      return (
        <FormComponent
          fields={fields}
          errors={errors}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          isSubmitDisabled={this.props.isSubmitDisabled}
        />
      );
    }
  }
);

export default FormHOC;
