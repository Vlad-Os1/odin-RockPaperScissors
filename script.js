
let gameResult = document.querySelector("#game-result");
let gameInfo = document.querySelector("#game-message");

let rockBtn = document.querySelector("#rockbtn");
let paperBtn = document.querySelector("#paperbtn");
let scissorsBtn = document.querySelector("#scissorsbtn");

let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice")

let playerScore = 0;
let computerScore = 0;

let playerScorePara = document.querySelector("#player-score");
let computerScorePara = document.querySelector("#computer-score");



rockBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
  displayChoice(playerChoice, "rock");
  displayChoice(computerChoice, computerSelection);
});

paperBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
  displayChoice(playerChoice, "paper");
  displayChoice(computerChoice, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
  displayChoice(playerChoice, "scissors");
  displayChoice(computerChoice, computerSelection);
});



function displayChoice(element, choice){
  let sign = "";
  switch (choice) {
    case "rock":
      sign = "✊";
      break;
    case "paper":
      sign = "✋";
      break;
    case "scissors":
      sign = "✌";
      break;
  }
  element.textContent = sign;
  element.className = "sign";
}


function getComputerChoice(){
  //Generate random number from 0 to 2 
  const randomNumber = Math.floor(Math.random() *3);
  //Assigning return depending on what number we got
  switch(randomNumber){
    case 0 : 
      return "rock";
    case 1 :
      return "paper";
    case 2 : 
      return "scissors";
  }
}


function  playRound(playerSelection, computerSelection){
  //Makes player input case-insensitive
  //playerSelection = playerSelection.toLowerCase();
  //Checks if playerSelection was rock, paper or scissors and not something else
  // if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
  //   return "Invalid choice! Please choose Rock, Paper, or Scissors"
  // } 
  
  if (playerSelection === computerSelection){

    gameResult.textContent = "It`s a tie";
    gameInfo.textContent = `${playerSelection} ties with ${computerSelection}`;

  } else if (playerSelection === "rock"  && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock"){

    gameResult.textContent = "You win!";
    gameInfo.textContent = `${playerSelection} beats ${computerSelection}`;
    playerScore++

  } else {
    gameResult.textContent = "You loose"
    gameInfo.textContent = `${computerSelection} beats ${playerSelection}`;
    computerScore++
  }    
  playerScorePara.textContent = `Player score: ${playerScore}`;
  computerScorePara.textContent = `Computer score: ${computerScore}`;


  if (playerScore == 5 || computerScore == 5){
    if (playerScore > computerScore) {
      alert("You Won!");
    } else if (playerScore < computerScore) {
      alert("You Lost :(");
    } 
    
    playerScore = 0;
    computerScore = 0;
    playerScorePara.textContent = "Player score: 0";
    computerScorePara.textContent = "Computer score: 0";
    gameResult.textContent = "Choose Rock, Paper, or Scissors";
    gameInfo.textContent = "First to score 5 points wins the game";
  }
}

