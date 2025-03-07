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

