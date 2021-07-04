import actions from '../actions/auth';
import Auth from './auth';

describe('Auth reducer', () => {
  let action;
  let newState;
  const initialState = {
    logged: false,
  };

  describe('is called with loginOk action', () => {
    beforeEach(() => {
      action = actions.loginOk({ id: 'id-user', name: 'name', token: 'pepe' });
      newState = Auth(initialState, action);
    });

    it('should updates the state with the logged user and logged:true when ACTION_TYPE.AUTH.LOGIN.OK', () => {
      expect(newState).toEqual({
        logged: true,
      });
    });
  });
});
