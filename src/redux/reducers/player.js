import { CREATE_OPTIONS, INCREASE_SCORE } from '../actions/actionTypes';

const INITIAL_STATE = {
  assertions: '',
  score: 0,
  gravatarEmail: '',
  options: [],
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_OPTIONS:
    return { ...state, options: action.payload };
  case INCREASE_SCORE:
    return { ...state, score: state.score + action.payload };
  default:
    return state;
  }
};

export default player;
