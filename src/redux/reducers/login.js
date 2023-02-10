import {
  CLEAR_STATE,
  SAVE_USER_DATA,
  START_TRIVIA,
  TIMEOUT_ACTION,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
  timeout: false,
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
