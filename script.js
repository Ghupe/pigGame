'use strict';
const playerBox = document.querySelector('.player');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const p1Current = document.querySelector('.current');
const p1Score = document.querySelector('.score');
const p2Current = document.querySelector('#name--1');
const p2Score = document.querySelector('#score--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const player1CurrentScoreTxt = document.querySelector('#current--0');
const player2CurrentScoreTxt = document.querySelector('#current--1');
const secCurrent = document.querySelector('.secCurrent');
const newGameBtn = document.querySelector('.btn--new');
const diceRollBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const hideMainWindow = document.querySelector('.hide');
const player1result = document.querySelector('.player1_img');
const player2result = document.querySelector('.player2_img');
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

function currentScoreClean() {

  player1CurrentScoreTxt.textContent = '0';
  player2CurrentScoreTxt.textContent = '0';
  player2currentScore = 0;
  player1currentScore = 0;
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

  } else if (activePlayer === player2) {

    player2currentScore += sumOfDice;
    player2CurrentScoreTxt.textContent = player2currentScore;
    console.log(player2currentScore);
    scoreClean();
    sideChange();
    win();

  }
}

function resultDisplay(display) {

  player1result.style.display = display;
  player2result.style.display = display;

}

function mainDisplay(display) {

  p1Score.style.display = display;
  p2Score.style.display = display;
  p1Current.style.display = display;
  p2Current.style.display = display;
  secCurrent.style.display = display;
  diceRollBtn.style.display = display;
  holdScoreBtn.style.display = display;
  diceImg.style.display = display;
  hideMainWindow.style.display = display;

}

function paddingConf(size) {

  player2.style.padding = size;
  playerBox.style.padding = size;
  player2.style.padding = size;
  player1.style.padding = size;

}

function player1Win() {

  paddingConf('0');
  player1result.src = 'winner.jpeg';
  player2result.src = 'loser.jpeg';
  mainDisplay('none');

}

function player2Win() {

  paddingConf('0');
  player2result.src = 'winner.jpeg';
  player1result.src = 'loser.jpeg';
  mainDisplay('none');

}


function win() {

  if (player1currentScore >= 100) {

    resultDisplay('block');
    player1Win();

  } else if (player2currentScore >= 100) {

    resultDisplay('block');
    player2Win();

  }

}

function restartGame() {

  resultDisplay('none');
  mainDisplay('block');
  scoreClean();
  currentScoreClean();
  paddingConf('9rem');
  diceImg.src = "dice1.png"
  player2.classList.remove('player--active');
  player1.classList.add('player--active');

}


diceRollBtn.addEventListener('click', rollTheDice);
holdScoreBtn.addEventListener('click', holdScore);
newGameBtn.addEventListener('click', restartGame);
