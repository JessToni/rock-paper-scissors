let num = 0;
const playerChoice = "rock";
let computerChoice;
playRound();

function getComputerChoice() {
    getRandomNumber();
    if (num === 0) {
        return "Rock"
    } else if (num === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getRandomNumber(min = 1, max = 3) {
    let rand = Math.floor(Math.random() * max);
    num = rand;
}

function playRound(playerSelection, computerSelection) {
    computerChoice = getComputerChoice();
    computerSelection = computerChoice.toLowerCase();
    console.log(computerSelection)
    playerSelection = playerChoice.toLowerCase();
}