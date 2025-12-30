function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 2) {
        return 'scissors';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'rock';
    }
}
//console.log(getComputerChoice());

let human = prompt('Enter rock, paper, or scissors.').toLowerCase(0);
function getHumanChoice() {
    if (human === 'scissors') {
        return 'scissors';
    } else if (human === 'paper') {
        return 'paper';
    } else if (human === 'rock') {
        return 'rock';
    } else {
        return 'Invalid Entry: Please enter rock, paper, or scissors!'
    }
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound() {
    
}