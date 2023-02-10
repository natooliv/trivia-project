import { INCREASE_SCORE } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INCREASE_SCORE:
    return { ...state, score: state.score + action.payload };
  default:
    return state;
  }
};

export default player;
