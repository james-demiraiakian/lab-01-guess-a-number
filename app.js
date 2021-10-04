//import { random } from "./random.js";

const userGuess = document.getElementById('user-guess');
const guessBut = document.getElementById('guess-but');
const reset = document.getElementById('reset');
const randNum = (Math.floor(Math.random() * 20)) + 1;
// initialize global state
let numGuess = 4
let result;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  guessBut.addEventListener('click', ()=> {
    numGuess--;
    
    if (userGuess === randNum) {
      result = 'Correct!';
    } else

    if (userGuess < randNum) {
      result = 'Too Low!';
    } else
    
    if (userGuess > randNum) {
      result = 'Too High!'
    }

    console.log(numGuess);
  });

  reset.addEventListener('click', () => {
    numGuess = 4;
  });