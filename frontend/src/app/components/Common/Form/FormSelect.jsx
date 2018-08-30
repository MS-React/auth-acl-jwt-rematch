import React from 'react';
import PropTypes from 'prop-types';
import {
  FormFeedback, FormGroup, Input, Label,
} from 'reactstrap';

class FormSelect extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    required: PropTypes.bool,
    feedback: PropTypes.string,
    children: PropTypes.array,
  };

  static defaultProps = {
    required: false,
    invalid: false,
    feedback: '',
    value: '',
    label: '',
    placeholder: '',
    children: [],
  };

  render() {
    const {
      type, name, placeholder, value, onChange, label, inputId, invalid, required, feedback,
      children,
    } = this.props;
    const asteristk = required ? '*' : '';
    return (
      <FormGroup>
        <Label>
          {label}
          {asteristk}
        </Label>
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
        <Input
          id={inputId}
          type="select"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          invalid={invalid}
        >
          {children}
        </Input>
        <FormFeedback>
          {feedback}
        </FormFeedback>
      </FormGroup>
    );
  }
}

export default FormSelect;
