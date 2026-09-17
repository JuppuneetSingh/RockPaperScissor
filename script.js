let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    }
    else if (randomNumber < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();
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

    // Display score after every round
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    // Check if game is over
    if (humanScore === 5) {
        result.textContent = "You won the game!";

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if (computerScore === 5) {
        result.textContent = "Computer won the game!";

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector("#result");
const score = document.querySelector("#score");


rock.addEventListener("click", () => {
    playRound("rock");
});

paper.addEventListener("click", () => {
    playRound("paper");
});

scissors.addEventListener("click", () => {
    playRound("scissors");
});



   






