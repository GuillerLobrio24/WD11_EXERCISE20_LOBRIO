const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const matchResult = document.querySelector("#matchResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerChoice.textContent = `${player}`;
    computerChoice.textContent = `${computer}`;
    matchResult.textContent = matchWinner();
}));

function computerTurn(){

    const randNum = Math.ceil(Math.random() * 3);

    if (randNum == 1) {
        computer = "ROCK";
    } else if (randNum == 2) {
        computer = "PAPER";
    } else if (randNum == 3) {
        computer = "SCISSORS";
    } else {
        return
    }
}
function matchWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      if (player == "PAPER") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    }
    else if(computer == "PAPER"){
      if (player == "SCISSORS") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    }
    else if(computer == "SCISSORS"){
      if (player == "ROCK") {
        return "You Win!";
      }else {
        return "You Lose!";
      }
    }
}