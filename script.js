let num = 0;
getComputerChoice();

function getComputerChoice() {
    getRandomNumber();
    if (num === 0) {
        return console.log("Rock");
    } else if (num === 1) {
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}

function getRandomNumber(min = 1, max = 3) {
    let rand = Math.floor(Math.random() * max);
    num = rand;
}