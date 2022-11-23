import './style.css';

const scoreList = document.querySelector('.score-list');

const infoData = [
  {
    name: 'Max',
    score: 90,
  },
  {
    name: 'Ann',
    score: 78,
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