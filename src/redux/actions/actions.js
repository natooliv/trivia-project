import { CLEAR_STATE,
  START_TRIVIA,

  TIMEOUT_ACTION, INCREASE_SCORE, SAVE_USER_DATA, CREATE_OPTIONS } from './actionTypes';

export const startTrivia = (token) => {
  localStorage.setItem('token', token);
  console.log(token);
  return {
    type: START_TRIVIA,
    token,
  };
};

export const requestAPIToken = () => (dispatch) => {
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => {
      dispatch(startTrivia(data.token));
    })
    .catch((error) => error.message);
};

export const increaseScore = (score) => ({
  type: INCREASE_SCORE,
  payload: score,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const timeoutAction = ({ isTimeout, seconds }) => ({
  type: TIMEOUT_ACTION,
  payload: { isTimeout, seconds },
});

export const saveUserData = (name, email) => ({
  type: SAVE_USER_DATA,
  payload: { name, email },
});

export const createOptions = (options) => ({
  type: CREATE_OPTIONS,
  payload: options,
});
