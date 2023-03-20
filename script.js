'use strict';

// document.querySelector('.btn--new').addEventListener('click', backToZero);

// document.querySelector('.btn--new').addEventListener('click', backToZero);

//select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const totalScor0El = document.getElementById('score--0');
const totalScore1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
//starting condition
totalScor0El.textContent = 0;
totalScore1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
const switchPlayer = function () {
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  // 1. createing random number
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  // 2. display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNumber}.png`;

  // 3. check if it is 1 change the player
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1. add current score to the total score
  scores[activePlayer] += currentScore;
  //currentScore[1] = currentScore[1] + currentScore;
  // scores[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. if hte total score >=100 olayer wins
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.playe--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.playe--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }

  // 3. if else change the player

  // totalScor0El += currentScore;
});

// btnHold.addEventListener('click', function () {
//   scor0El += currentScore;
// });

// let backToZero = function () {
//   totalScor0El.textContent = 0;
//   totalScor1El.textContent = 0;
//   current0.textContent = 0;
//   current1.textContent = 0;
// };
// document.querySelector('.btn--new').addEventListener('click', backToZero);

// just as a push
