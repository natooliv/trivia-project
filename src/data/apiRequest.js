export const ENDPOINT_TOKEN = 'https://opentdb.com/api_token.php?command=request';

export const getQuestions = async () => {
  const token = localStorage.getItem('token');
  const ansewers = await fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`,
  ).then((response) => response.json()
    .then((data) => data));
  return ansewers;
};
