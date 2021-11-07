let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
const playChoices = ['rock','paper','scissors'];
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');

//Plays round with selected button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id)
  })
});

function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
    pScore.textContent = `Player Score: ${playerScore}`
    cScore.textContent = `Computer Score: ${computerScore}`

  }



// Determines winner from player's choice and computer's choice.
function playRound(playerSelection, computerSelection) {
    let computerPlay = playChoices[Math.floor(Math.random() * playChoices.length)];
    computerSelection = computerPlay;

    if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    roundWinner = 'computer';
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    roundWinner = 'player';
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
    roundWinner = 'tie';
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    roundWinner = 'computer';
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    roundWinner = 'player';
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
    roundWinner = 'tie';
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    roundWinner = 'player';
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore += 1;
    roundWinner = 'computer';
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
    roundWinner = 'tie';
    }
    
    updateScore();
    
    if (playerScore == 5) {
      playerScore = 0;
      computerScore = 0;
      alert('Player Wins! Make a selection to play again.');
  }
    else if(computerScore ==5) {
      playerScore = 0;
      computerScore = 0;
      alert('Computer Wins! Make a selection to play again.');
    }
}