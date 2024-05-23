
const allowedChoices = [
    "Rock",
    "Paper",
    "Scissors"
]

// Get random computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * allowedChoices.length);
    return allowedChoices[randomIndex];
}

// Check if the user input valid
function checkInput(input) {
    return allowedChoices.indexOf(capitalize(input)) >= 0
};

// Capitalize user input
function capitalize(text) {
    return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`
}

function winMessage(winner, loser) {
    console.log(`You Won! ${winner} beats ${loser}`);
    return 1
}

function loseMessage(loser, winner) {
    console.log(`You Lost! ${winner} beats ${loser}`);
    return -1
}
function tieMessage() {
    console.log(`Tie!`);
    return 0
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return loseMessage(playerSelection, computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return winMessage(playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return loseMessage(playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return winMessage(playerSelection, computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return loseMessage(playerSelection, computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return winMessage(playerSelection, computerSelection);
    } else {
    return tieMessage()   
    }
};


let score = 0;
for (let i = 0; i < 5; i++) {

    const computer = getComputerChoice();
    let input = prompt("Please fill in your selection");

    if (checkInput(input)) {
        score += playRound(capitalize(input), computer)
        // console.log(typeof(roundResult))
    } else {
        alert("invalid input, try again");
    }
}

function gameResult (scoreNew) {
if (scoreNew > 0) {
    console.log("You won the game");
} else if (scoreNew === 0) {
    console.log("Tie");
} else {
    console.log("You lost the game");
}
}


gameResult(score);
    
    




