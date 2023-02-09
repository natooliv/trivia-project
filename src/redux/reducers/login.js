import { START_TRIVIA } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_TRIVIA:
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
};

export default loginReducer;
