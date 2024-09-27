function getComputerChoice(){
    let outcome = Math.random();
    if (outcome <= 0.33){
        return "rock";
    } else if (outcome <= 0.66){
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice(){
    choice = prompt("What is your choice?");
    return choice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    let humanChoiceCompare = humanChoice.toUpperCase();

    //Human chose rock
    if (humanChoiceCompare === "ROCK"){
        if (computerChoice === "rock"){
            tied("rock");
        } else if (computerChoice === "paper"){
            lost("paper", "rock");
            computerScore++;
        }  else{
            won("rock", "scissors");
            humanScore++;
        }
    } else if (humanChoiceCompare === "PAPER"){
        if (computerChoice === "rock"){
            won("paper", "rock");
            humanScore++;
        } else if (computerChoice === "paper"){
            tied("paper");
        }  else{
            lost("scissors", "paper");
            computerScore++;
        }
    } else{
        if (computerChoice === "rock"){
            lost("rock", "scissors");
            computerScore++;
        } else if (computerChoice === "paper"){
            won("scissors", "paper");
            humanScore++;
        }  else{
            tied("scissors");
        }
    }

    return [humanScore, computerScore];
}

function won(winnerChoice, loserChoice){
    console.log(`You won! ${winnerChoice} beats ${loserChoice}.`)
}

function tied(choice){
    console.log(`You tied! You both picked ${choice}.`)
}

function lost(winnerChoice, loserChoice){
    console.log(`You lost! ${winnerChoice} beats ${loserChoice}.`)
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore)
    } 
    console.log(`Game over! Final score is ${humanScore}-${computerScore}`)
}


playGame();


