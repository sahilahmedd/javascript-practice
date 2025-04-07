let randomNumber = parseInt(Math.random() * 100 + 1);

// Select elements from HTML
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const randonum = document.querySelector('#randomnum')

// console.log('guessSlot:', guessSlot);

// Create elemets to append
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// randonum.innerHTML = `${randomNumber}`

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 ) {
    alert('Please enter a valid number');
  } else if (guess > 100){
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You gussed it RIGHT!!!`);
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`The number is too LOW`);
  } else if (guess > randomNumber) {
    displayMessage(`The number is too HIGH!!!`);
  }
};

const displayGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
};

const endGame = () => {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
};

const newGame = () => {
  const newGamebtn = document.querySelector("#newGame")
  newGamebtn.addEventListener("click", (e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = ''
    remaning.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true
  })
};
