let num = 0;
let choices = document.getElementById('player-choices');
let playerChoice = "";

choices.addEventListener('click', (event) => {
    const isButton = event.target.nodeName ==='BUTTON'
    if (!isButton) {
        return;
    }
    console.dir(event.target.id);
    playerChoice = event.target.id;
    game();
})

let computerChoice = getComputerChoice();


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
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(playRound(playerChoice,computerChoice));
}