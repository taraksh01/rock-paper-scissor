const choices = ['rock', 'paper', 'scissor'];

function randomNumber(num){
    return Math.floor(Math.random()*num);
}

console.log(getComputerChoice());

function getComputerChoice(){
    return choices[randomNumber(choices.length)];
}

// console.log("File is working correctly");