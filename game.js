// Function to generate random computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let result = "";
    if(choice == 0){
        result = "Rock";
    }else if(choice == 1){
        result = "Paper";
    }else{
        result = "Scissors";
    }
    return result;
}

// Function to get human choice
function getHumanChoice(){
    let choice = prompt("Enter your choice : ");
    return choice;
}

let humanScore = 0;
let computerScrore = 0;

// Function get result of a game round betwen human and computer
function playRound(){
    let computer = getComputerChoice();
    let human = getHumanChoice();

    if(human.toLowerCase() == computer.toLowerCase()){
        console.log("It's a draw");
    }else if(human.toLowerCase() == "paper" && computer.toLowerCase() == "scissors"){
        console.log("You lose! Scissors beats Paper”");
        computerScrore++;
    }else if(human.toLowerCase() == "rock" && computer.toLowerCase() == "paper"){
        console.log("You lose! Paper beats Rock”");
        computerScrore++;
    }else if(human.toLowerCase() == "scissors" && computer.toLowerCase() == "rock"){
        console.log("You lose! Rock beats Scissors”");
        computerScrore++;
    }else{
        console.log("You Win :)");
        humanScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5 ; i++){
        playRound();
    }
}

console.log(playGame());
console.log(computerScrore)
console.log(humanScore)