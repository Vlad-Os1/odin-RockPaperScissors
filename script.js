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
  playerSelection = playerSelection.toLowerCase();
  //Checks if playerSelection was rock, paper or scissors and not something else
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
    return "Invalid choice! Please choose Rock, Paper, or Scissors"
  } 
  
  if (playerSelection === computerSelection){
    return "It`s a tie"
  } else if (playerSelection === "rock"  && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock"){
    return "You win! Rock beats Scissors";
  } else {
    return `You loose ${computerSelection} beats ${playerSelection}`
  }    
}

