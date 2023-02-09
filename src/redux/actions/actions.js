import { START_TRIVIA } from './actionTypes';

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
