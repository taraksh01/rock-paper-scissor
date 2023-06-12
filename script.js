const choices = ['rock', 'paper', 'scissor'];
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

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

console.log(playRound(playerSelection, computerSelection));