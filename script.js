'use strict';

// document.querySelector('.btn--new').addEventListener('click', backToZero);

let backToZero = function () {
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
};

document.querySelector('.btn--new').addEventListener('click', backToZero);

//select elements
const scor0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--0');
//starting condition
scor0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
btnRoll.addEventListener('click', function () {
  // 1. createing random number
  let randomNumber = Math.round(Math.random() * 6);
  // 2. display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNumber}.png`;

  // 3. check if it is 1 change the player
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    current1.textContent = currentScore;
  } else {
  }
});
