import './style.css';

const scoreList = document.querySelector('.score-list');

const infoData = [
  {
    name: 'Max',
    score: 80,
  },
  {
    name: 'Ann',
    score: 75,
  },
  {
    name: 'Lucy',
    score: 60,
  },
];

const populateList = (data) => {
  data.forEach((n) => {
    const textHtml = `<p class="score-num">${n.name}: ${n.score}</p>`;
    scoreList.insertAdjacentHTML('afterbegin', textHtml);
  });
};

populateList(infoData);