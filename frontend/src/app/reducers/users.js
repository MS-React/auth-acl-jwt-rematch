import { ACTION_TYPE } from '../constants';

const initialState = {
  error: null,
  data: [],
  selectedUser: {},
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.USERS.GET.OK:
      return { ...state, users: action.users };
    case ACTION_TYPE.USERS.GET.ERROR:
      return { ...state, error: action.error };
    case ACTION_TYPE.USERS.CREATE.OK:
      return { ...state, users: [...state.users, action.user] };
    case ACTION_TYPE.USERS.CREATE.ERROR:
      return { ...state, error: action.error };
    case ACTION_TYPE.USERS.UPDATE.OK:
      return {
        ...state,
        users: [
          action.user,
          ...state.users.filter(user => user.id !== action.user.id),
        ],
        selectedUser: action.user,
      };
    case ACTION_TYPE.USERS.UPDATE.ERROR:
      return { ...state, error: action.error };
    case ACTION_TYPE.USERS.DELETE.OK:
      return {
        ...state,
        selectedUser: {},
        users: state.users.filter(user => user.id !== action.id),
      };
    case ACTION_TYPE.USERS.DELETE.ERROR:
      return { ...state, error: action.error };
    case ACTION_TYPE.USERS.SELECT:
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
};

export default Users;
