import {
  CLEAR_STATE,
  START_TRIVIA,
  TIMEOUT_ACTION,
  SAVE_USER_DATA,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
  timeout: false,
  timer: 30,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_DATA:
    return { ...state, name: action.payload.name, email: action.payload.email };
  case CLEAR_STATE:
    return INITIAL_STATE;
  case START_TRIVIA:
    return {
      ...state,
      token: action.token,
    };
  case TIMEOUT_ACTION:
    return {
      ...state,
      timeout: action.payload.isTimeout,
      timer: action.payload.seconds,
    };
  default:
    return state;
  }
};

export default loginReducer;
