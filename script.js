

function getComputerChoice()
{
    let randomNumber = Math.random();

    if(randomNumber <  1/3)
    {
        return "rock";
    }
    else if(randomNumber < 2/3)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }

}
function getHumanChoice()
{
    let choice = prompt("Choose rock , paper or scissors : ");
    return choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    // Round 1
    playRound(getHumanChoice(), getComputerChoice());

    // Round 2
    playRound(getHumanChoice(), getComputerChoice());

    // Round 3
    playRound(getHumanChoice(), getComputerChoice());

    // Round 4
    playRound(getHumanChoice(), getComputerChoice());

    // Round 5
    playRound(getHumanChoice(), getComputerChoice());


    // Final score
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);


    // Final winner
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer is the winner!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();


   







// console.log("Computer:", getComputerChoice());
// console.log("Human:", getHumanChoice());



