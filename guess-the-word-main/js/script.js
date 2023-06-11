const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//Add eventlistener for the button
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
    const goodGuess = validateInput(guess);
    //const result = guessedLetter;
    //conslole.log(result);
  });

  //validating the player's input
  const validateInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0){
        message.innerText = "Please enter a letter";
    } else if (input.length > 1){
        message.innerText = "Please enter one letter";
    } else if (!input.match(acceptedLetter)){
        message.innerText = "Please enter a letter from A to Z.";
    }
    else {
      return input;
    };
  };
  

  //capturing input
  const makeGuess = function(guess){
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)){
      message.innertext = "You already guessed that letter."
    } else {
      guessedLetters.push(guess);
      console.log(guessedLetters);
    }
  };