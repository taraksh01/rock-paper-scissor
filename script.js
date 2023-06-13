const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector("#result");
const winner = document.querySelector(".winner");
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getComputerChoice() {
  return choices[randomNumber(choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You Won! Rock breaks Scissor";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You Lose! Scissor cuts Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Won! Paper beats Rock";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You Lose! Rock breaks Scissor";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You Won! Scissor cuts Paper";
  } else {
    return `Match Draw! You both selected ${playerSelection}`;
  }
}

function playGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();
      const play = playRound(playerSelection, computerSelection);
      result.textContent = play;
      showScore();
    });
  });
}

function showScore() {
  if (result.textContent.substring(4, 5).toLowerCase() === "w") {
    playerScore++;
  } else if (result.textContent.substring(4, 5).toLowerCase() === "l") {
    computerScore++;
  }
  score.textContent = `Your Score: ${playerScore} && Computer Score: ${computerScore}`;
  if (playerScore >= 5 || computerScore >= 5) {
    announceWinner();
  }
}

function announceWinner() {
  if (playerScore >= 5) {
    winner.textContent = "You Won the Game!!!";
  } else if (computerScore >= 5) {
    winner.textContent = "Computer Won the Game!!!";
  }
}

if (playerScore < 5 && computerScore < 5) {
  playGame();
}
