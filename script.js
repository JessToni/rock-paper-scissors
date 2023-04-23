let num = 0;
const playerChoice = "rock";
let computerChoice = getComputerChoice();
game();

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

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (true) {
        case (playerSelection === computerSelection):
            return "It's a draw";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "Player wins!";
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "Computer wins!";
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "Player wins!";
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return "Computer wins!";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "Player wins!";
        case (playerSelection === "rock" && computerSelection === "paper"):
            return "Computer wins!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerChoice,computerChoice));
    }
}