const choices = ['rock', 'paper', 'scissor'];

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getComputerChoice() {
    return choices[randomNumber(choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return "You Won! Rock breaks Scissor";
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return "You Lose! Scissor cuts Paper";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Won! Paper beats Rock";
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return "You Lose! Rock breaks Scissor";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return "You Won! Scissor cuts Paper";
    } else {
        return `Match Draw! You both selected ${playerSelection}`;
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore <= 5 && computerScore <= 5) {
        const playerSelection = prompt("Enter your choice (rock, paper, scissor)").toLowerCase();
        const computerSelection = getComputerChoice();
        const play = playRound(playerSelection, computerSelection);

        if (play.substring(4, 5).toLowerCase() === 'w') {
            playerScore++;
        } else if (play.substring(4, 5).toLowerCase() === 'l') {
            computerScore++;
        }

        console.log(`You selected ${playerSelection}, Computer selected ${computerSelection}`);
        console.log(`Result ${play}`);
        console.log(`Your score ${playerScore}, Computer score ${computerScore}`);

        if (playerScore >= 5) {
            return "You Won the Game!!!";
        } else if (computerScore >= 5) {
            return "Computer Won the Game!!!";
        }

    }
}
console.log(game());