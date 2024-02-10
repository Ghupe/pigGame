'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const player1CurrentScoreTxt = document.querySelector('#current--0');
const player2CurrentScoreTxt = document.querySelector('#current--1');
const newGameBtn = document.querySelector('.btn--new');
const diceRollBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const hideMainWindow = document.querySelector('.hide')
const player1result = document.querySelector('.player1_img')
const player2result = document.querySelector('.player2_img')
let sumOfDice = 0;
let activePlayer;
let player1currentScore = 0;
let player2currentScore = 0;


if (player1.classList.contains('player--active')) {
  activePlayer = player1;
} else {
  activePlayer = player2;
}

function scoreClean() {
  player1Score.textContent = '0';
  player2Score.textContent = '0';
  sumOfDice = 0;
}

function sideChange() {

  if (activePlayer === player1) {

    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    activePlayer = player2;
    scoreClean();

  } else if (activePlayer === player2) {

    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    activePlayer = player1;
    scoreClean();

  }

}


function rollTheDice() {

  const diceNum = Math.floor(Math.random() * 6) + 1;

  diceImg.src = `dice${diceNum}.png`;

  if (activePlayer === player1 && diceNum !== 1) {

    sumOfDice += diceNum;
    player1Score.textContent = sumOfDice;


  } else if (activePlayer === player2 && diceNum !== 1) {

    sumOfDice += diceNum;
    player2Score.textContent = sumOfDice;

  } else {

    scoreClean();
    sideChange();

  }
}


function holdScore() {

  if (activePlayer === player1) {

    player1currentScore += sumOfDice;
    player1CurrentScoreTxt.textContent = player1currentScore;
    scoreClean();
    sideChange();
    win();
    console.log(player1currentScore);

  } else if (activePlayer === player2) {

    player2currentScore += sumOfDice;
    player2CurrentScoreTxt.textContent = player2currentScore;
    console.log(player2currentScore);
    win();
    scoreClean();
    sideChange();

  }
}


function win() {

  if (player1currentScore >= 20) {

    hideMainWindow.style.display = "none"
    player1result.src = 'winner.jpeg'
    player2result.src = 'loser.jpeg'
    player1result.style.display = "block"
    player2result.style.display = "block"



  }else if (player2currentScore >= 20){

    hideMainWindow.style.display = "none"
    player2result.src = 'winner.jpeg'
    player1result.src = 'loser.jpeg'
    player1result.style.display = "block"
    player2result.style.display = "block"


  }

}


diceRollBtn.addEventListener('click', rollTheDice);
holdScoreBtn.addEventListener('click', holdScore);