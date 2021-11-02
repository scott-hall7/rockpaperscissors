/*
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// Randomly selects computer choice from array.
const playChoices = ['rock','paper','scissors'];
// Determines winner from player's choice and computer's choice.
function playRound(playerSelection, computerSelection) {
let computerPlay = playChoices[Math.floor(Math.random() * playChoices.length)];
computerSelection = computerPlay;
playerInput = prompt("Rock, paper, or scissors?");
playerSelection = playerInput.toLowerCase();

if (playerSelection == "rock" && computerSelection == "paper") {
 alert("Computer wins! Paper beats rock.")
 computerScore += 1;
}
else if (playerSelection == "rock" && computerSelection == "scissors") {
 alert("Player wins! Rock beats scissors.")
 playerScore += 1;
}
else if (playerSelection == "rock" && computerSelection == "rock") {
 alert("Tied, no one wins.")
}
else if (playerSelection == "scissors" && computerSelection == "rock") {
 alert("Computer wins! Rock beats scissors.")
 computerScore += 1;
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
alert("Player wins! Scissors beats paper.")
playerScore += 1;
}
else if (playerSelection == "scissors" && computerSelection == "scissors") {
 alert("Tied, no one wins.")
}
else if (playerSelection == "paper" && computerSelection == "rock") {
 alert("Player wins! Paper beats rock.")
 playerScore += 1;
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
alert("Computer wins! Scissors beats paper.")
computerScore += 1;
}
else if (playerSelection == "paper" && computerSelection == "paper") {
 alert("Tied, no one wins.")
}
}
while (playerScore < 5 && computerScore < 5) {
playRound();
console.log(`Player Score: ${playerScore} to Computer Score: ${computerScore}`);
}
*\