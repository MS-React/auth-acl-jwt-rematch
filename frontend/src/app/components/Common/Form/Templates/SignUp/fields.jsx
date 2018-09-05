export const fields = {
  name: {
    value: '',
    required: true,
    validation: 'isEmpty',
  },
  email: {
    value: '',
    required: true,
    validation: 'isValidEmail',
  },
  password: {
    value: '',
    required: true,
    validation: 'isEmpty',
  },
  phone: {
    value: '',
  },
  skypeId: {
    value: '',
  },
  rol: {
    value: 'member',
  },
};
