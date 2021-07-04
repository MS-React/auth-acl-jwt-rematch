export const fields = {
  name: {
    value: '',
    required: true,
    rules: [{ method: 'isEmpty' }],
  },
  password: {
    value: '',
    required: true,
    rules: [{ method: 'isEmpty' }],
  },
};
