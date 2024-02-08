const player = document.querySelector('.player')
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score = document.querySelector(".score")
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const currentScore = document.querySelector('.current-score');
const player1CurrentScore = document.querySelector('#current--0')
const player2CurrentScore = document.querySelector('#current--1')
const newGameBtn = document.querySelector('.btn--new');
const diceRollBtn = document.querySelector('.btn--roll');
const holdCurrentScore = document.querySelector('.btn--hold');
let sumOfDice = 0
let activePlayer

if (player1.classList.contains('player--active')){
  activePlayer = player1
}else {
  activePlayer = player2
}


function sideChange (){

  if (activePlayer === player1){

    player1.classList.remove('player--active')
    player2.classList.add('player--active')
    activePlayer = player2
    player1Score.textContent = "0"

  }else if (activePlayer === player2) {

    player2.classList.remove('player--active')
    player1.classList.add('player--active')
    activePlayer = player1
    player2Score.textContent = "0"

  }

}


function rollTheDice() {

  const diceNum = Math.floor(Math.random() * 6) + 1;

  diceImg.src = `dice${diceNum}.png`;

    if (activePlayer === player1 && diceNum !== 1) {

      sumOfDice += diceNum
      player1Score.textContent = sumOfDice

    }else if (activePlayer === player2 && diceNum !== 1) {

      sumOfDice += diceNum
      player2Score.textContent = sumOfDice

    }else {

      sumOfDice = 0
      sideChange()

    }
}


diceRollBtn.addEventListener('click', rollTheDice);