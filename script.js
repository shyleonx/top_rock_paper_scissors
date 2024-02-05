let playerScore = 0;
let computerScore = 0;

/* I advanced learn in array so I used it here because it is easier */

function getComputerChoice() {
   let comChoices = ["rock", "paper", "scissor"];
   let randomNum = Math.floor(Math.random() * 3); // This will generate a random number between 0-2 that will be used as index for array.
   return comChoices[randomNum];
}

/* I ADD ANOTHER FUNCTION FOR USER CHOICE SO IT'S MORE CLEAN */

function getUserChoice() {
    const userChoice = prompt("Choose: Rock, Paper, Scissor: ").toLowerCase(); // add .toLowerCase to make it case-insensitive

    if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissor") {
        return userChoice;
    } else {
        alert("You can only choose between rock, paper. or scissor")
        return getUserChoice();
    }
}

function playRound(playerSelection, computerSelection) {

    let result;

    if (playerSelection === computerSelection) {
        result = `It's a draw you both choose ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "paper" || playerSelection === "paper" || computerSelection === "rock") {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    console.log(result);
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