const userGuess = document.getElementById('user-guess');
const guessBut = document.getElementById('guess-but');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
let trys = document.getElementById('trys');
let randNum = (Math.floor(Math.random() * 20)) + 1;

let numGuess = 4;
let guessResult;

console.log(randNum);

  guessBut.addEventListener('click', ()=> {
    numGuess--;
    
    console.log(userGuess.value);

    const userGuessVal = Number(userGuess.value);

    if (userGuessVal === randNum) {
      guessResult = 'Correct!';
      guessBut.disabled = true;
    } else 
    if (numGuess === 0) {
      guessResult = 'Out of Guesses!';
      guessBut.disabled = true;
    } else
    if (userGuessVal < randNum) {
      guessResult = 'Too Low!';
    } else 
    if (userGuessVal > randNum) {
      guessResult = 'Too High!';
    }

    trys.textContent = `${numGuess} trys remain.`;
    result.textContent = guessResult;
  });

  reset.addEventListener('click', () => {
    numGuess = 4;
    guessBut.disabled = false;
    trys.textContent = '4 trys remain.';
  });