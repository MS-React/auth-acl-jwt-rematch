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
    rules: [
      {
        method: 'isEmpty',
      },
      {
        method: 'maxLength',
        args: { length: 5 },
      },
    ],
  },
  email: {
    value: '',
    required: true,
    rules: [
      {
        method: 'isEmpty',
      },
      {
        method: 'isValidEmail',
      },
    ],
  },
  password: {
    value: '',
    required: true,
    rules: [
      {
        method: 'isEmpty',
      },
    ],
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
