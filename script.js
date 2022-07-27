function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  //   console.log(randomNumber);
  if (randomNumber === 0) {
    // console.log("rock");
    return "rock";
  } else if (randomNumber === 1) {
    // console.log("paper");
    return "paper";
  } else {
    // console.log("scissors");
    return "scissors";
  }
}

// function playerSelection() {
//   let playerChoice = prompt("Rock, Paper, or Scissors?");
//   return playerChoice.toLowerCase();
// }

let roundWinner = "";

function playRound(playerSelection, getComputerChoice) {
  if (getComputerChoice === playerSelection) {
    console.log("Tie");
    roundWinner = "tie";
    return "it's a tie!";
  } else if (getComputerChoice === "rock" && playerSelection === "paper") {
    roundWinner = "player";
    console.log("You win! Paper beats rock");
    console.log(roundWinner);
    return "You win! Paper beats rock.";
  } else if (getComputerChoice === "rock" && playerSelection === "scissors") {
    roundWinner = "computer";
    console.log("You lose! Rock beats scissors");
    console.log(roundWinner);
    return "You lose! Rock beats scissors.";
  } else if (getComputerChoice === "paper" && playerSelection === "rock") {
    roundWinner = "computer";
    console.log("You lose! Paper beats rock");
    console.log(roundWinner);
    return "You lose! Paper beats rock.";
  } else if (getComputerChoice === "paper" && playerSelection === "scissors") {
    roundWinner = "player";
    console.log("You win! Scissors beats paper.");
    console.log(roundWinner);
    return "You win! Scissors beats paper.";
  } else if (getComputerChoice === "scissors" && playerSelection === "rock") {
    roundWinner = "player";
    console.log("You win! Rock beats scissors.");
    console.log(roundWinner);
    return "You win! Rock beats scissors.";
  } else if (getComputerChoice === "scissors" && playerSelection === "paper") {
    roundWinner = "computer";
    console.log("You lose! Scissors beats paper.");
    console.log(roundWinner);
    return "You lose! Scissors beats paper.";
  } else {
    console.log("Please enter a valid selection.");
    console.log(roundWinner);
    return "Invalid selection. Please try again.";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    console.log(`Round ${round}`);
    playRound(playerSelection, getComputerChoice());
    if (roundWinner === "player") {
      playerScore++;
      console.log(`Player score: ${playerScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (roundWinner === "computer") {
      computerScore++;
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
    } else {
      console.log("It's a tie! No points awarded.");
      console.log(
        `Player score: ${playerScore} Computer score: ${computerScore}`
      );
    }
  }
  if (playerScore > computerScore) {
    console.log(
      "The human player wins the game with a score of " + playerScore
    );
  } else if (computerScore > playerScore) {
    console.log(
      "The computer player wins the game with a score of " + computerScore
    );
  } else {
    console.log(
      `This game is a tie! Both players have a score of ${playerScore}`
    );
  }
}

game();
