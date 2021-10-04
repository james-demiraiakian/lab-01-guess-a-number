const userGuess = document.getElementById('user-guess').value;
const guessBut = document.getElementById('guess-but');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
let trys = document.getElementById('num-guess');
const randNum = (Math.floor(Math.random() * 20)) + 1;


trys = 4;
let numGuess = 4;
let guessResult;



  guessBut.addEventListener('click', ()=> {
    numGuess--;
    if (userGuess === randNum) {
      guessResult = 'Correct!';
    } else 
    if (numGuess = 0) {
      guessResult = 'Out of Guesses!';
    } else
    if (userGuess < randNum) {
      guessResult = 'Too Low!';
    } else 
    if (userGuess > randNum) {
      guessResult = 'Too High!';
    }

    result.textContent = guessResult;
  });

  reset.addEventListener('click', () => {
    numGuess = 4;
    guessResult = ' ';
  });