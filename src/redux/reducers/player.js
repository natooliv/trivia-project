import { CREATE_OPTIONS, INCREASE_SCORE, REFRESH_TIMER } from '../actions/actionTypes';

const INITIAL_STATE = {
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  options: [],
  timerBool: true,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REFRESH_TIMER:
    return { ...state, timerBool: action.payload };
  case CREATE_OPTIONS:
    return { ...state, options: action.payload };
  case INCREASE_SCORE:
    return { ...state,
      score: state.score + action.payload,
      assertions: state.assertions + 1,
    };
  case 'CLEAR_STORE':
    return {
      ...INITIAL_STATE,
    };

  default:
    return state;
  }
};

export default player;
