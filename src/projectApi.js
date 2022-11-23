import { populateList } from './index.js';

const renderInfo = document.querySelector('.render-info');
const marioId = 'Zl4d7IVkemOTTVg2fUdz';
const gameApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const renderData = (data) => {
  renderInfo.textContent = data;
};

export const sendData = (username, userscore) => {
  fetch(`${gameApi}games/${marioId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score: userscore,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((data) => {
      if (data.ok) {
        renderData('Information sent successfully');
      } else {
        throw new Error(`No response:${data.status}`);
      }
    })
    .catch((err) => {
      renderData(`There is mistake ${err.message}. You can try later`);
    });
};

export const fetchData = async () => {
  const response = await fetch(`${gameApi}games/${marioId}/scores/`);
  const info = await response.json();

  const sortingScore = info.result.sort((a, b) => a.score - b.score);

  populateList(sortingScore);
};
