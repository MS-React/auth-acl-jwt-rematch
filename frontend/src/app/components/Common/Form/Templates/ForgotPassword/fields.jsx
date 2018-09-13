export const fields = {
  email: {
    value: '',
    required: true,
    rules: [{ method: 'isValidEmail' }],
  },
};
