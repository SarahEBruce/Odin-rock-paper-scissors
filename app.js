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
    const randomIndex = Math.floor(Math.random() * 3);
    //randomIndex determines array position of gameChoices returned
    return gameChoices [randomIndex];
}

//Store function in computerSelection variable
//Store user's choice in playerSe;ection variable
const computerSelection = getComputerChoice();
const playerSelection = "rock";

//Function takes the playerSelection and computerSelection variable and compares them
//Variables are compared in lower case to ensure equality for comparison
//A draw results in replay, otherwise the user is informed whether they won or lost
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a draw - play again!";
    }
        
        else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
        return "You lose! Paper beats Rock!";
        }

        else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")) {
        return "You win! Rock beats Paper!";
        }

        else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "rock")) {
            return "You win! Paper beats Rock!";
        }
                
        else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")) {
            return "You lose! Scissors beats Paper!";
        }
        
        else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
            return "You win! Scissors beats Paper!";
        }
        
        else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
            return "You win! Scissors beats Paper!";
        }
        
}

