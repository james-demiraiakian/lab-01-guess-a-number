const userGuess = document.getElementById('user-guess');
const guessBut = document.getElementById('guess-but');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
let trys = document.getElementById('trys');
let numCorrect = document.getElementById('correct');
let randNum = (Math.floor(Math.random() * 20)) + 1;

let numGuess = 4;
let guessResult;
let numCorrectVal = numCorrect.value;
console.log(numCorrectVal);
console.log('Initial Random Number is', randNum);

  guessBut.addEventListener('click', ()=> {
    numGuess--;

    const userGuessVal = Number(userGuess.value);

    if (userGuessVal === randNum) {
      guessResult = 'Correct!';
      guessBut.disabled = true;
      numCorrectVal++;
      //console.log(numCorrectVal);
      //numCorrect.textContent = Number(numCorrect.value);
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
    randNum = (Math.floor(Math.random() * 20)) + 1;
    console.log('New Random Number is', randNum);
  });