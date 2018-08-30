import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Route } from 'react-router';
import Login from '../../containers/Login';
import SecurityInterceptor from './SecurityInterceptor';
jest.mock('../../containers/Login');
jest.mock('react-router');

describe('GIVEN <SecurityInterceptor />', () => {
  let wrapper;
  let defaultProps;

  describe('WHEN user not logged', () => {
    beforeEach(() => {
      Login.mockClear();
      defaultProps = {
        UnauthenticatedComponent: Login,
        authenticate: jest.fn(),
        authenticatingByToken: false,
        logged: false
      };

      wrapper = shallow(<SecurityInterceptor {...defaultProps} />);
    });

    it('THEN it should render with the given <UnauthenticatedComponent /> to Login', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('WHEN user is authenticated by Token', () => {
    beforeEach(() => {
      defaultProps = {
        authenticate: jest.fn(),
        authenticatingByToken: true,
      };

      wrapper = shallow(<SecurityInterceptor {...defaultProps} />);
    });

    it('THEN it should render with the <SplashScreen />', () => {
      expect(renderer.create(wrapper)
        .toJSON())
        .toMatchSnapshot();
    });
  });

  describe('WHEN user is logged in', () => {
    beforeEach(() => {
      Route.mockClear();
      defaultProps = {
        authenticate: jest.fn(),
        authenticatingByToken: false,
        logged: true,
        path: '/directmessage'
      };

      wrapper = shallow(
        <SecurityInterceptor {...defaultProps} />
      );
    });

    it('THEN it should render with the router given by the path', () => {
      expect(wrapper.html()).toEqual('');
    });
  });
});
