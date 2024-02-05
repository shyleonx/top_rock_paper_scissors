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

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("it's a tie");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You win! Rock crushes scissor");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper covers rock");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! Scissor cuts paper");
    } else {
        console.log("You lose :(");
    }

}


const playerSelection = prompt("Choose Rock, Paper, Scissor: ").toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(playerSelection, computerSelection);