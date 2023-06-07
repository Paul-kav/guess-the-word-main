const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
    validateInput(input);
    const result = guessedLetter;
    conslole.log(result);
  });

  //validating the player's input
  const validateInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input === 0){
        message.innerText = "Enter a letter";
    } else if (input > 1){
        message.innerText = "Please enter one letter";
    } else if (input.match(acceptedLetter)){
        message.innerText = "Did you enter a number?";
    }
    else message.innertext = "yay, yay";
  };
  return input;