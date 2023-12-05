// 2 variables are playerSelection and computerSelection
// 3 options are available - Rock, Paper or Scissors
// Store in single variable as array gameChoices
// Rock beats scissors, scissors beats paper, paper beats rock
// The user inputs one of these options
// The computer generates a choice at random and returns the winner

//Store all 3 items in a single variable to allow random selection
const gameChoices = ["Rock", "Paper", "Scissors"]

// Function generates a random integer between 0 and 2
function getComputerChoice() {
    // Result is stored in variable randomIndex
    const randomIndex = Math.floor(Math.random() * 3);
    //randomIndex determines array position of gameChoices returned
    return gameChoices [randomIndex];
}