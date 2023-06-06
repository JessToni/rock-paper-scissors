//const playerChoice = prompt("Rock, Paper, Scissors?");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

function getComputerChoice() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNumber = getRandomNumber();
    return arrOfChoices[randomNumber];
}

function getRandomNumber(min = 1, max = 3) {
    let rand = Math.floor(Math.random() * max);
    return rand;
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

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection)
})

//function game() {
//    computerChoice = getComputerChoice();
//    console.log(computerChoice);
//    console.log(playRound(playerChoice,computerChoice));
//}