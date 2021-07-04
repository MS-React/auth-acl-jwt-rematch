import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Route } from 'react-router';
import Login from '../../Pages/Login';
import SecurityInterceptor from './SecurityInterceptor';

jest.mock('../../Pages/Login');
jest.mock('react-router');

describe('<SecurityInterceptor />', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      children: (<div key="children-key">Children</div>),
      UnauthenticatedComponent: Login,
      authenticate: jest.fn(),
    };
  });

  describe('user not logged', () => {
    beforeEach(() => {
      Login.mockClear();
      wrapper = shallow(<SecurityInterceptor {...defaultProps} />);
    });

    it('should render with the given <UnauthenticatedComponent /> to Login', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('user is authenticated by Token', () => {
    beforeEach(() => {
      defaultProps.token = 'token-id';
      wrapper = shallow(<SecurityInterceptor {...defaultProps} />);
    });

    it('should call authenticate callback with the token to keep the session', () => {
      expect(defaultProps.authenticate).toHaveBeenCalledWith('token-id');
    });
  });

  describe('user is logged in', () => {
    beforeEach(() => {
      Route.mockClear();
      defaultProps.logged = true;
      defaultProps.path = '/';

      wrapper = shallow(<SecurityInterceptor {...defaultProps} />);
    });

    it('should render with the router given by the path', () => {
      expect(wrapper.find('Route').props()).toEqual(expect.objectContaining({
        path: '/',
      }));
    });
  });
});
