'use strict';

// document.querySelector('.btn--new').addEventListener('click', backToZero);

//select elements (El means element)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let totalScor0El = document.getElementById('score--0');
let totalScore1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
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
  // 1. add taken score to the total score

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores[activePlayer]);
  console.log(currentScore);
  // 2. if  total score >=100 player wins
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.playe--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.playe--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // 3. if else switch the player
    switchPlayer();
  }

  // totalScor0El += currentScore;
});

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  current0.textContent = 0;
  current1.textContent = 0;
  totalScor0El.textContent = 0;
  totalScore1El.textContent = 0;
});
