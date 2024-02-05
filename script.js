let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let hands = Math.floor(Math.random() * 3);

    if (hands === 0) {
        return "rock";
    } else if (hands === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

/* I ADD ANOTHER FUNCTION FOR USER CHOICE SO IT'S MORE CLEAN */

function getUserChoice() {
    const userChoice = prompt("Choose: Rock, Paper, Scissor: ").toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissor") {
        return userChoice;
    } else {
        alert("You can only choose between rock, paper. or scissor")
        return getUserChoice();
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("it's a tie");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You win! Rock crushes scissor");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper covers rock");
        playerScore++;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! Scissor cuts paper");
        playerScore++;
    } else {
        console.log("You lose :(");
        computerScore++;
    }
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
}

function playGame() {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore >= 5) {
        console.log("You won the race to 5!");
    } else {
        console.log("You lost");
    }
}

playGame();