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


function getHumanChoice() {
    let input = prompt('Enter rock, paper, or scissors').toLowerCase();
    if (input === 'rock' || input === 'scissors' || input === 'paper') {
        return input;
    } else {
        return null;
    }
}
//c

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanSelect, computerSelect) {
    console.log(`Me: ${humanSelect}`);
    console.log(`Computer: ${computerSelect}`);
    if (humanSelect == computerSelect) {
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
    
}

if (humanChoice === null) {
    console.log('Invalid entry. Round not played.');
} else {
    playRound(humanChoice, computerChoice);
}