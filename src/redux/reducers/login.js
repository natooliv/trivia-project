import { CLEAR_STATE, START_TRIVIA, TIMEOUT_ACTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
  timeout: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CLEAR_STATE:
    return INITIAL_STATE;
  case START_TRIVIA:
    return {
      ...state,
      token: action.token,
    };
  case TIMEOUT_ACTION: // RELOCAR PARA O REDUCER CORRETO
    return {
      ...state,
      timeout: action.timeout,
    };
  default:
    return state;
  }
};

export default loginReducer;
