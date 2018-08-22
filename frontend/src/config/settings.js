const environmentSettings = {
  local: {
    SERVICE: {
      BASE_URL: 'https://localhost:3030/',
    },
  },
  dev: {
    SERVICE: {
      BASE_URL: 'https://ms-labs-be.herokuapp.com/service',
    },
  },
  test: {
    SERVICE: {
      BASE_URL: 'https://ms-labs-be.herokuapp.com/service',
    },
  },
};

export default environmentSettings[process.env.NODE_ENV];
