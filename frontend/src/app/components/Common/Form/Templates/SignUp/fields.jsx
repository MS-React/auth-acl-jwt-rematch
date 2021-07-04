export const fields = {
  name: {
    value: '',
    required: true,
    rules: [{ method: 'isEmpty' }],
  },
  email: {
    value: '',
    required: true,
    rules: [{ method: 'isValidEmail' }],
  },
  password: {
    value: '',
    required: true,
    rules: [{ method: 'isEmpty' }],
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
