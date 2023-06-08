const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const showResults = document.querySelector('.results');
const showPlayerScore = document.querySelector('.player-score');
const showComputerScore = document.querySelector('.computer-score')
const gameWinner = document.querySelector('.game-winner')

let playerScore = 0;
let computerScore = 0;
let total = playerScore + computerScore;

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

    if (playerSelection === computerSelection) {
        return "Nobody wins. It's a draw!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Scissors cuts paper. Player wins!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Rock smashes scissors. Computer wins!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Paper trumps rock. Player wins!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Scissors cuts paper. Computer wins!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Paper trumps rock. Computer wins!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Rock smashes scissors. Player wins!"
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    showResults.textContent = playRound(playerSelection, computerSelection);
    showPlayerScore.textContent = "Player Score: " + playerScore;
    showComputerScore.textContent = "Computer Score: " + computerScore;
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    showResults.textContent = playRound(playerSelection, computerSelection);
    showPlayerScore.textContent = "Player Score: " + playerScore;
    showComputerScore.textContent = "Computer Score: " + computerScore;
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    showResults.textContent = playRound(playerSelection, computerSelection);
    showPlayerScore.textContent = "Player Score: " + playerScore;
    showComputerScore.textContent = "Computer Score: " + computerScore;
})