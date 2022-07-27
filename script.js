function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    console.log("rock");
    return "rock";
  } else if (randomNumber === 1) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}

// function playerSelection() {
//   let playerChoice = prompt("Rock, Paper, or Scissors?");
//   return playerChoice.toLowerCase();
// }

function playRound(playerSelection, getComputerChoice) {
  if (getComputerChoice === playerSelection) {
    return "it's a tie!";
  } else if (getComputerChoice === "rock" && playerSelection === "paper") {
    return "You win! Paper beats rock.";
  } else if (getComputerChoice === "rock" && playerSelection === "scissors") {
    return "You lose! Rock beats scissors.";
  } else if (getComputerChoice === "paper" && playerSelection === "rock") {
    return "You lose! Paper beats rock.";
  } else if (getComputerChoice === "paper" && playerSelection === "scissors") {
    return "You win! Scissors beats paper.";
  } else if (getComputerChoice === "scissors" && playerSelection === "rock") {
    return "You win! Rock beats scissors.";
  } else if (getComputerChoice === "scissors" && playerSelection === "paper") {
    return "You lose! Scissors beats paper.";
  } else {
    return "Invalid selection. Please try again.";
  }
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

game();

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
