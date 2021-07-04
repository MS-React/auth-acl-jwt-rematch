import actions from '../actions/users';
import Users from './users';

describe('Users reducer', () => {
  let action;
  let newState;
  const initialState = {
    error: null,
    data: [],
    selectedUser: {},
  };

  describe('is called with loginOk action', () => {
    beforeEach(() => {
      action = actions.loginOk({ id: 'id-user', name: 'name', token: 'pepe' });
      newState = Users(initialState, action);
    });

    it('should updates the state with the logged user and logged:true when ACTION_TYPE.AUTH.LOGIN.OK', () => {
      expect(newState).toEqual({
        logged: true,
      });
    });
  });
});
