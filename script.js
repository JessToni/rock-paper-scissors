let num = 0;
const playerChoice = "rock";
let computerChoice;
playRound(playerChoice,computerChoice);

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
    computerChoice = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);
    typeof(playerSelection);
    typeof(computerSelection);

    switch (playerSelection,computerSelection) {
        case (playerSelection === computerSelection):
            return console.log("It's a draw");
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return console.log("Player wins!");
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return console.log("Computer wins!");
        case (playerSelection === "paper" && computerSelection === "rock"):
            return console.log("Player wins!");
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return console.log("Computer wins!");
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return console.log("Player wins!");
        case (playerSelection === "rock" && computerSelection === "paper"):
            return console.log("Computer wins!");
    }
}