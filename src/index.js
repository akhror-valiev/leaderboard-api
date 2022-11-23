import './style.css';
// eslint-disable-next-line import/no-cycle
import { sendData, fetchData } from './projectApi.js';

export const scoreList = document.querySelector('.score-list');
const inputName = document.querySelector('.name');
const inputScore = document.querySelector('.score');
const refBtn = document.querySelector('.btn');
const btnForm = document.querySelector('.btn-form');

export const populateList = (data) => {
  data.forEach((n) => {
    const textHtml = `<p class="score-num">${n.user}: ${n.score}</p>`;
    scoreList.insertAdjacentHTML('afterbegin', textHtml);
  });
};

const addScore = () => {
  sendData(inputName.value, inputScore.value);
  inputName.value = '';
  inputScore.value = '';
};

window.onload = () => {
  fetchData();

  btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    addScore();
  });
  refBtn.addEventListener('click', () => {
    scoreList.innerHTML = '';
    fetchData();
  });
};
