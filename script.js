const buttons = document.querySelectorAll(".btn");
const resultsDiv = document.querySelector(".results");
const runningScoreDiv = document.querySelector(".running-score");
const winner = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let playerSelection = event.target.id;
    playRound(playerSelection, getComputerChoice());
  });
});

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let roundWinner = "";

function playRound(playerSelection, getComputerChoice) {
  if (getComputerChoice === playerSelection) {
    resultsDiv.innerText = "Tie";
    roundWinner = "tie";
    game(roundWinner);
    round++;
    return "it's a tie!";
  } else if (getComputerChoice === "rock" && playerSelection === "paper") {
    roundWinner = "player";
    resultsDiv.innerText = "You win! Paper beats rock";
    round = round + 1;
    game(roundWinner);
    return "You win! Paper beats rock.";
  } else if (getComputerChoice === "rock" && playerSelection === "scissors") {
    roundWinner = "computer";
    resultsDiv.innerText = "You lose! Rock beats scissors";
    round++;
    game(roundWinner);
    return "You lose! Rock beats scissors.";
  } else if (getComputerChoice === "paper" && playerSelection === "rock") {
    roundWinner = "computer";
    resultsDiv.innerText = "You lose! Paper beats rock";
    round++;
    game(roundWinner);
    return "You lose! Paper beats rock.";
  } else if (getComputerChoice === "paper" && playerSelection === "scissors") {
    roundWinner = "player";
    resultsDiv.innerText = "You win! Scissors beats paper.";
    round++;
    game(roundWinner);
    return "You win! Scissors beats paper.";
  } else if (getComputerChoice === "scissors" && playerSelection === "rock") {
    roundWinner = "player";
    resultsDiv.innerText = "You win! Rock beats scissors.";
    round++;
    game(roundWinner);
    return "You win! Rock beats scissors.";
  } else if (getComputerChoice === "scissors" && playerSelection === "paper") {
    roundWinner = "computer";
    resultsDiv.innerText = "You lose! Scissors beats paper.";
    round++;
    game(roundWinner);
    return "You lose! Scissors beats paper.";
  } else {
    resultsDiv.innerText = "Please enter a valid selection.";
    game();
    return "Invalid selection. Please try again.";
  }
}

function game(roundWinner) {
  if (roundWinner === "player") {
    playerScore++;
    runningScoreDiv.innerText = `Player score: ${playerScore} Computer score: ${computerScore}`;
  } else if (roundWinner === "computer") {
    computerScore++;
    runningScoreDiv.innerText = `Player score: ${playerScore} Computer score: ${computerScore}`;
  } else {
    runningScoreDiv.innerText = `Player score: ${playerScore} Computer score: ${computerScore}`;
  }

  if (playerScore === 5) {
    winner.innerText = `The human player wins the game with a score of ${playerScore}`;
  } else if (computerScore === 5) {
    winner.innerText = `The computer wins the game with a score of ${computerScore}`;
  } else {
    winner.innerText = `This game is a tie! Both players have a score of ${playerScore}`;
  }
}
