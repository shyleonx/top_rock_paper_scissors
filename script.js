let playerScore = 0;
let computerScore = 0;

const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const grassBtn = document.querySelector('#grass');
const userImg = document.querySelector('.user-image');
const comImg = document.querySelector('.com-image');
const startBtn = document.querySelector('#start-game');
const result = document.querySelector('#result');
const userScore = document.querySelector('.player-score');
const comScore = document.querySelector('.computer-score');

startBtn.addEventListener('click', () => {

    startBtn.style.display = 'none';
    
    playerScore = 0;
    computerScore = 0;
    userScore.textContent ='0';
    comScore.textContent = '0';
    userScore.style.color = 'yellow';
    comScore.style.color = 'yellow';
    result.textContent= '';
    isGameComplete = false; 
    
    fireBtn.style.display = 'block';
    waterBtn.style.display = 'block';
    grassBtn.style.display = 'block';

    userImg.src = 'images/pokeball.png';
    comImg.src = 'images/pokeball.png';

})

function changeToFire() {
    userImg.src = "images/fire.png";
}
function changeToWater() {
    userImg.src = "images/water.png";
}
function changeToGrass() {
    userImg.src = "images/grass.png";
}



    fireBtn.addEventListener('click', () => {
        getPlayerChoice('fire');
        changeToFire();
    });
    waterBtn.addEventListener('click', () => {
        getPlayerChoice('water');
        changeToWater();  
    });
    grassBtn.addEventListener('click', () => {  
        getPlayerChoice('grass');
        changeToGrass();    
    });


    function getPlayerChoice(choice) {
        playRound(choice, getComputerChoice())
    }


function getComputerChoice() {
   let comChoices = ["fire", "water", "grass"];
   let randomNum = Math.floor(Math.random() * 3); // This will generate a random number between 0-2 that will be used as index for array.
   if(comChoices[randomNum] === "fire") {
    comImg.src = 'images/fire.png';
   } else if (comChoices[randomNum] === "water") {
    comImg.src = 'images/water.png';
   } else {
    comImg.src = 'images/grass.png';
   }

   return comChoices[randomNum];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result.innerHTML = `It's a <span class="draw">draw</span> you both choose ${playerSelection}`;
    } else if (
        (playerSelection === "fire" && computerSelection === "grass") || 
        (playerSelection === "grass" && computerSelection === "water") || 
        (playerSelection === "water" && computerSelection === "fire")
        ) {
        result.innerHTML = `You <span class="win">win!</span> ${playerSelection} beats ${computerSelection}.`;
        playerScore++;

    } else {
        result.innerHTML = `You <span class="lose">lose!</span> ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        
    }

    if (playerScore === computerScore) {
        userScore.style.color = 'yellow';
        comScore.style.color = 'yellow';
    } else if (playerScore > computerScore){
        userScore.style.color = 'greenyellow';
        comScore.style.color = 'red'; 
    } else {
        userScore.style.color = 'red';
        comScore.style.color = 'greenyellow';
    }

    userScore.textContent = `${playerScore}`;
    comScore.textContent = `${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {

        startBtn.style.display = 'inline';

        fireBtn.style.display = 'none';
        waterBtn.style.display = 'none';
        grassBtn.style.display = 'none';
        
        startBtn.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            result.textContent= '';
        })
        
        if (playerScore === 5) {
            result.textContent = 'PLAYER WON THE BATTLE!';
        } else {
            result.textContent = 'YOU LOST. COMPUTER WINS.';
        }

        return;
    }
}
