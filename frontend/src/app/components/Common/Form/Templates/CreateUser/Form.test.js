import React from 'react';
import { shallow } from 'enzyme';
import UsersForm from './Form';

function setup(props) {
  return shallow(<UsersForm {...props} />);
}

describe('<UsersForm /> component', () => {
  it('renders itself', () => {
    // Arrange Act
    const wrapper = setup({
      onChange: () => {},
      user: {},
      errors: {},
    });

    // Assert
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('FormInput')).toHaveLength(4);
  });

  it('renders itself with errors', () => {
    // Arrange Act
    const wrapper = setup({
      onChange: () => {},
      user: {},
      errors: {
        name: 'Name is required',
        email: 'email is required',
      },
    });

    // Assert
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('FormInput')).toHaveLength(4);
  });
});
