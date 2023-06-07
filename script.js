const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const showResults = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score')
const gameWinner = document.querySelector('.game-winner')

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
    showResults.textContent = playRound(playerSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    showResults.textContent = playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    showResults.textContent = playRound(playerSelection, computerSelection);
})