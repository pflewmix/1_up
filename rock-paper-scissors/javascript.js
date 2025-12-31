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
console.log(`Computer: ${getComputerChoice()}`);

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
console.log(`Me: ${getHumanChoice()}`);

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanSelect, computerSelect) {
    if (humanSelect == 'rock' || humanSelect == 'paper' || humanSelect == 'scissors') {
        if (humanSelect === computerSelect) {
            console.log('Draw: No score!');
        } else if (humanSelect == 'scissors' && computerSelect == 'paper') {
            console.log(`You win! ${humanSelect} beats ${computerSelect}.`);
            humanScore++
        } else if (humanSelect == 'rock' && computerSelect == 'scissors') {
            console.log(`You win! ${humanSelect} beats ${computerSelect}.`);
            humanScore++
        } else if (humanSelect == 'paper' && computerSelect == 'rock') {
            console.log(`You win! ${humanSelect} beats ${computerSelect}.`);
            humanScore++
        } else {
            console.log(`You lose! ${computerSelect} beats ${humanSelect}.`);
            computerScore++
        }
        console.log(`You: ${humanScore} | CPU: ${computerScore}`);
    } else {
        console.log('Invalid Entry');
    }
}

playRound(humanChoice, computerChoice);