let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let outcome = Math.random();
    if (outcome <= 0.33){
        return "Rock";
    } else if (outcome <= 0.66){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    //Same choice
    if (humanChoice === computerChoice){
        console.log(`It's a tie! You both picked ${humanChoice}`)
    }else{
        if (humanChoice === "Rock"){
            if (computerChoice === "Scissors"){
                console.log("You win! Rock beats scissors")
                humanScore++
            }else{
                console.log("You lose! Paper beats rock")
                computerScore++
            }
        }else if (humanChoice === "Paper"){
            if (computerChoice === "Scissors"){
                console.log("You lose! Scissors beats paper")
                computerScore++
            }else{
                console.log("You win! Paper beats rock")
                humanScore++
            }
        }else{
            if (computerChoice === "Rock"){
                console.log("You lose! Rock beats Scissors")
                computerScore++
            }else{
                console.log("You win! Scissors beats paper")
                humanScore++
            }
        }
    }
}

function playGame(humanSelection){
    let computerSelection = getComputerChoice();
        
    playRound(humanSelection, computerSelection)
    console.log(`Current Score: ${humanScore}-${computerScore}`)

    if (humanScore === 5 || computerScore === 5){
        console.log(`Game over! Final score is ${humanScore}-${computerScore}`);
        //Todo: Make this work
        rockButton.removeEventListener("click", () => {
            playGame("Rock")
        });
        paperButton.removeEventListener("click", () => {
            playGame("Paper")
        });
        scissorsButton.removeEventListener("click", () => {
            playGame("Scissors")
        });
    }

}

const rockButton = document.createElement("button")
const paperButton = document.createElement("button")
const scissorsButton = document.createElement("button")

rockButton.textContent = "Rock"
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"


document.querySelector("body").appendChild(rockButton)
document.querySelector("body").appendChild(paperButton)
document.querySelector("body").appendChild(scissorsButton)


rockButton.addEventListener("click", () => {
    playGame("Rock")
});
paperButton.addEventListener("click", () => {
    playGame("Paper")
});
scissorsButton.addEventListener("click", () => {
    playGame("Scissors")
});



