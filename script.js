"use strict";
/*Random number generator*/
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreSelected = document.querySelector(".score");
const again = document.querySelector(".again");
const card = document.querySelector(".card");
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const input = document.querySelector("input");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

/*Click event when Again button is clicked*/
again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  scoreSelected.textContent = score;
  document.querySelector(".number").textContent = "?";
  card.style.background = "black";
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".guess").value = "";
  card.style.background = "black";
  check.style.background = "black";
  again.style.background = "black";
  input.style.background = "black";
});

/*Click event when Check button is clicked*/
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number Guessed!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost!");
      document.querySelector("h1").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
      card.style.background = "red";
    }
  } else if (guess === secretNumber) {
    card.style.background = "#e1ad01";
    check.style.background = "#e1ad01";
    again.style.background = "#e1ad01";
    input.style.background = "#e1ad01";
    displayMessage("Well Done! You Guessed the correct number!");
    document.querySelector("h1").textContent = "You Won!";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});
