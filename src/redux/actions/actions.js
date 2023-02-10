import { CLEAR_STATE, START_TRIVIA, TIMEOUT_ACTION } from './actionTypes';

export const startTrivia = (token) => {
  localStorage.setItem('token', token);
  return {
    type: START_TRIVIA,
    token,
  };
};

export const requestAPIToken = () => (dispatch) => {
  console.log('requestapi');
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => dispatch(startTrivia(data.token)))
    .catch((error) => error.message);
};

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const timeoutAction = (payload) => ({
  type: TIMEOUT_ACTION,
  timeout: payload,
});
