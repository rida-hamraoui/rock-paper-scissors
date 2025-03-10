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

let humanScore = 0;
let computerScore = 0;

// Change the displayed result 
function displayResult(message){
    roundResult.textContent = message;
}

// Function get result of a game round betwen human and computer
function playRound(human){
    let computer = getComputerChoice();

    if(human.toLowerCase() == computer.toLowerCase()){
        displaResult("It's a draw");
    }else if(human.toLowerCase() == "paper" && computer.toLowerCase() == "scissors"){
        displayResult("You lose! Scissors beats Paper");
        computerScore++;
    }else if(human.toLowerCase() == "rock" && computer.toLowerCase() == "paper"){
        displayResult("You lose! Paper beats Rock");
        computerScore++;
    }else if(human.toLowerCase() == "scissors" && computer.toLowerCase() == "rock"){
        displayResult("You lose! Rock beats Scissors");
        computerScore++;
    }else{
        displayResult("You Win :)");
        humanScore++;
    }
}

// Update display score
function updateScore(){
    hScore.textContent = "Your score : " + humanScore;
    cScore.textContent = "Computer Score: " + computerScore;
}

// Check the winner
function announceWinner(){
    if(humanScore == 5){
        displayResult("You Win The Game :)");
        init();
    }
    if(computerScore == 5){
        displayResult("You lose The Game :(");
        init();
    }
}

// initialize the score 
function init(){
    computerScore = 0;
    humanScore = 0;
    updateScore();
}

// Add a div to display the score
const body = document.body;
body.setAttribute("style", "margin: 10px; font-size: 30px;");
const div = document.createElement("div");
div.setAttribute("style", "border: solid black; padding: 10px;");
body.appendChild(div);

// Add event for each button
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
        updateScore();
        announceWinner();
    });
});

// Add the human score
const hScore = document.createElement("div");
hScore.textContent = "Your score : " + humanScore;
div.appendChild(hScore);

// Add the computer score
const cScore = document.createElement("div");
cScore.textContent = "Computer Score: " + computerScore;
div.appendChild(cScore);
 
// Display the result of the round or the game
const Result = document.createElement("div");
body.appendChild(Result);