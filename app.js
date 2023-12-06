// 2 variables are playerSelection and computerSelection
// 3 options are available - Rock, Paper or Scissors
// Store in single variable as array gameChoices
// Rock beats scissors, scissors beats paper, paper beats rock
// The user inputs one of these options
// The computer generates a choice at random and returns the winner

//Store all 3 items in a single variable to allow random selection
const gameChoices = ["rock", "paper", "scissors"];

// Function generates a random integer between 0 and 2
function getComputerChoice() {
    // Result is stored in variable randomIndex
    let randomIndex = Math.floor(Math.random() * 3);
    //randomIndex determines array position of gameChoices returned
    return gameChoices [randomIndex];
}

//Store function in computerSelection variable
//Store user's choice in playerSe;ection variable
const computerSelection = getComputerChoice();
const playerSelection = "rock"

//Define the starting scores and round values
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

//Function takes the playerSelection and computerSelection variable and compares them
//Variables are compared in lower case to ensure equality for comparison
//A draw results in replay, otherwise the user is informed whether they won or lost
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = prompt("Choose rock paper or scissors");
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        //iterate game round but no score assigned
        gameRound ++;
        return "It's a draw - play again!";
    }
        
        else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
            gameRound ++;
            computerScore ++;
            return "You lose! Paper beats Rock!";
        }

        else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")) {
            gameRound ++;
            playerScore ++;
            return "You win! Rock beats Scissors!";
        }

        else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "rock")) {
            gameRound ++;
            playerScore ++;
            return "You win! Paper beats Rock!";
        }
                
        else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")) {
            gameRound ++;
            computerScore ++;
            return "You lose! Scissors beats Paper!";
        }
        
        else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
            gameRound ++;
            playerScore ++;
            return "You win! Scissors beats Paper!";
        }
        
        else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
            gameRound ++;
            computerScore ++;
            return "You lose! Rock beats Scissors!";
        }
    }

    //console.log(playRound(playerSelection, computerSelection))

//Function iterates while loop calling playRound function until one player reaches 3 points or the 5 rounds are complete
function game() {
    while ((playerScore <=2) && (computerScore<=2) && (gameRound <= 5)) {
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log("You Win!")
    }
        else if (computerScore > playerScore) {
        console.log("You Lose!")
        }
        else {
        console.log("It's a tie!")
        }
}

console.log(game())