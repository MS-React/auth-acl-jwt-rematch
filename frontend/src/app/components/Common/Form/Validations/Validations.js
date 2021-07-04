/* eslint-disable-next-line */
export const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Rules = {
  isEmpty: value => value !== '',
  isValidEmail: value => EMAIL_REGEXP.test(value),
  minLength: (value, args) => value.length < args.length,
  maxLength: (value, args) => value.length > args.length,
};

export const validAll = (formFields) => {
  const errors = {};
  Object.keys(formFields).forEach(fieldName => { // eslint-disable-line
    const currentField = formFields[fieldName];
    const RulesToApply = currentField.rules && currentField.rules || []; // eslint-disable-line
    if (RulesToApply.length > 0) {
      for (let i = 0; i < RulesToApply.length; i++) { // eslint-disable-line
        const rule = RulesToApply[i];
        const args = rule.args && rule.args || {}; // eslint-disable-line
        if (rule.method && Rules[rule.method] && !Rules[rule.method](currentField.value, args)) {
          errors[fieldName] = `${fieldName[0].toUpperCase() + fieldName.slice(1)} is invalid`;
          break;
        }
      }
    }
  });

  return errors;
};
