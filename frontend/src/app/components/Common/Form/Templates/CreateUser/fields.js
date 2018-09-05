export const fields = {
  id: {
    value: '',
  },
  _id: {
    value: '',
  },
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
    value: '',
  },
};
