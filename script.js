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
    playerSelection = playerChoice.toLowerCase();
    computerSelection = computerChoice.toLowerCase();

    switch (playerSelection,computerSelection) {
        case (playerSelection === computerSelection):
            return conslole.log("It's a draw")
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return conslole.log("Player wins!")
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return conslole.log("Computer wins!")
        case (playerSelection === "paper" && computerSelection === "rock"):
            return conslole.log("Player wins!")
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return conslole.log("Computer wins!")
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return conslole.log("Player wins!")
        case (playerSelection === "rock" && computerSelection === "paper"):
            return conslole.log("Computer wins!")
    }
}