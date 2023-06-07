//wait for the DOM loading before running the game
//get the button elements and add event listeners to them

//based on love-maths code
document.addEventListener("DOMContentLoaded", function () {
    let clickedButtons = document.getElementsByTagName("button");
    for (let button of clickedButtons) {
        button.addEventListener("click", function () {
            // Pass both variables as arguments to the checkWinner() function
            let playerChoice = this.getAttribute("data-type");
            let computerChoice = generateComputerChoice();

            //add animation to player hand and computer hand
            let playerImageShake = document.getElementById("player-hand");
            let computerImageShake = document.getElementById("computer-hand");
            playerImageShake.classList.add("shake-player");
            computerImageShake.classList.add("shake-computer");

            //Code based on youtube "Code Grind channel" more details and link at readme.md

            setTimeout(() => {
                playerImageShake.classList.remove("shake-player");
                computerImageShake.classList.remove("shake-computer");

                displayGameImage(playerChoice, computerChoice);
                checkWinner(playerChoice, computerChoice);
                calculateTheWinner();

            }, 900)
        })
    }
    rulesMenu();
})

/** 
* Generates an random number and return an random array element 
*/
function generateComputerChoice() {
    let computerChoiceArray = ["rock-computer", "lizard-computer", "paper-computer", "scissors-computer", "spock-computer"];
    let i = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoiceI = computerChoiceArray[i];
    return computerChoiceI;
}

// Code based on Responsive Navbar Tutorial link and more details at readme.md

/**
 * A simple dropdown menu
 */
function rulesMenu() {
    let rulesSpan = document.getElementsByClassName("rules-span")[0];
    let rulesList = document.getElementsByClassName("rules-list")[0];
    rulesSpan.addEventListener("click", () => {
        rulesList.classList.toggle("active");
    })

}

/** 
 * Check playerChoice against computerChoice, return the winner of the match and add +1 to the winner 
 * score, or a tie +0 and add  and remove css style trough classes
*/

function checkWinner(playerChoice, computerChoice) {

    let ruleElement = document.getElementById("winner-rule-point");
    let scorePlayer = document.getElementById("player-score");
    let scoreComputer = document.getElementById("computer-score");
    let numberOfMatches = document.getElementById("matches-counter");

    if (playerChoice === "scissors-player" && computerChoice === "rock-computer") {
        ruleElement.textContent = "computer win: \xa0 Rock crushes scissors! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "rock-player" && computerChoice === "scissors-computer") {
        ruleElement.textContent = "player win: \xa0 Rock crushes scissors! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "paper-player" && computerChoice === "scissors-computer") {
        ruleElement.textContent = "computer win: \xa0 Scissors cut paper! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "scissors-player" && computerChoice === "paper-computer") {
        ruleElement.textContent = "player win: \xa0 Scissors cut paper! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "rock-player" && computerChoice === "paper-computer") {
        ruleElement.textContent = "computer win: \xa0 Paper covers rock! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "paper-player" && computerChoice === "rock-computer") {
        ruleElement.textContent = "player win: \xa0 Paper covers rock! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "lizard-player" && computerChoice === "rock-computer") {
        ruleElement.textContent = "computer win: \xa0 rock crushes lizard! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "rock-player" && computerChoice === "lizard-computer") {
        ruleElement.textContent = "player win: \xa0 rock crushes lizard! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "spock-player" && computerChoice === "lizard-computer") {
        ruleElement.textContent = "computer win: \xa0 Lizard poisons Spock! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "lizard-player" && computerChoice === "spock-computer") {
        ruleElement.textContent = "player win: \xa0 Lizard poisons Spock! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "scissors-player" && computerChoice === "spock-computer") {
        ruleElement.textContent = "computer win: \xa0 Spock smashes scissors! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "spock-player" && computerChoice === "scissors-computer") {
        ruleElement.textContent = "player win: \xa0 Spock smashes scissors! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "lizard-player" && computerChoice === "scissors-computer") {
        ruleElement.textContent = "computer win: \xa0 Scissors decapitate lizard! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "scissors-player" && computerChoice === "lizard-computer") {
        ruleElement.textContent = "player win: \xa0 Scissors decapitate lizard! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "paper-player" && computerChoice === "lizard-computer") {
        ruleElement.textContent = "computer win: \xa0 Lizard eats paper! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "lizard-player" && computerChoice === "paper-computer") {
        ruleElement.textContent = "player win: \xa0 Lizard eats paper! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "spock-player" && computerChoice === "paper-computer") {
        ruleElement.textContent = "computer win: \xa0 Paper disproves Spock! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "paper-player" && computerChoice === "spock-computer") {
        ruleElement.textContent = "player win: \xa0 Paper disproves Spock! \xa0 PlayerScore: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else if (playerChoice === "rock-player" && computerChoice === "spock-computer") {
        ruleElement.textContent = "computer win: \xa0 Spock vaporizes rock! \xa0 Computer Score: + 1.";
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        ruleElement.classList.remove("winner-player");
        ruleElement.classList.add("winner-computer");
    } else if (playerChoice === "spock-player" && computerChoice === "rock-computer") {
        ruleElement.textContent = "player win: \xa0 Spock vaporizes rock! \xa0 Player Score: + 1.";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.add("winner-player");

    } else {
        ruleElement.textContent = `No winner! \xa0 it's a tie: \xa0 ${playerChoice} \xa0 and \xa0 
        ${computerChoice}! \xa0 Score: + 0.`;
        ruleElement.classList.remove("winner-computer");
        ruleElement.classList.remove("winner-player");
    }
    numberOfMatches.textContent = parseInt(numberOfMatches.textContent) + 1;
}
/** 
 * Return the choice image from a dictionary based on player choice and computer random choice.
*/
function displayGameImage(playerChoice, computerChoice) {

    let imageDictionary = {
        rockPlayer: "assets/images/icon-rock-player.svg",
        scissorsPlayer: "assets/images/icon-scissors-player.svg",
        paperPlayer: "assets/images/icon-paper-player.svg",
        lizardPlayer: "assets/images/icon-lizard-player.svg",
        spockPlayer: "assets/images/icon-spock-player.svg",

        rockComputer: "assets/images/icon-rock-computer.svg",
        scissorsComputer: "assets/images/icon-scissors-computer.svg",
        paperComputer: "assets/images/icon-paper-computer.svg",
        lizardComputer: "assets/images/icon-lizard-computer.svg",
        spockComputer: "assets/images/icon-spock-computer.svg",
    }

    let playerImageElement = document.getElementById("player-hand");
    let computerImageElement = document.getElementById("computer-hand");
// Player choices
    if (playerChoice === "scissors-player") {
        playerImageElement.src = imageDictionary.scissorsPlayer;
    } else if (playerChoice === "rock-player") {
        playerImageElement.src = imageDictionary.rockPlayer;
    } else if (playerChoice === "paper-player") {
        playerImageElement.src = imageDictionary.paperPlayer;
    } else if (playerChoice === "lizard-player") {
        playerImageElement.src = imageDictionary.lizardPlayer;
    } else if (playerChoice === "spock-player") {
        playerImageElement.src = imageDictionary.spockPlayer;
    }

    // Computer choice
    if (computerChoice === "scissors-computer") {
        computerImageElement.src = imageDictionary.scissorsComputer;
    } else if (computerChoice === "rock-computer") {
        computerImageElement.src = imageDictionary.rockComputer;
    } else if (computerChoice === "paper-computer") {
        computerImageElement.src = imageDictionary.paperComputer;
    } else if (computerChoice === "lizard-computer") {
        computerImageElement.src = imageDictionary.lizardComputer;
    } else if (computerChoice === "spock-computer") {
        computerImageElement.src = imageDictionary.spockComputer;
    }
}


/**
 * Calculate the winner, display winner text, add and remove css style trough classes 
 */
function calculateTheWinner() {

    let numberOfMatchesCalculate = parseInt(document.getElementById("matches-counter").textContent);
    let scorePlayerCalculate = parseInt(document.getElementById("player-score").textContent);
    let scoreComputerCalculate = parseInt(document.getElementById("computer-score").textContent);
    let theWinner = document.getElementById("the-winner");

    if (numberOfMatchesCalculate === 5 && scorePlayerCalculate > scoreComputerCalculate) {
        theWinner.innerHTML = `Congratulations Player Wins!!! =)<br/> Player: ${scorePlayerCalculate} \xa0 vs \xa0 Computer: ${scoreComputerCalculate}`;
        theWinner.classList.remove("winner-computer");
        theWinner.classList.add("winner-player");

    } else if (numberOfMatchesCalculate === 5 && scorePlayerCalculate < scoreComputerCalculate) {
        theWinner.innerHTML = `Computer Wins... =(<br/> Player: ${scorePlayerCalculate} \xa0 vs \xa0 Computer: ${scoreComputerCalculate}`;
        theWinner.classList.remove("winner-player");
        theWinner.classList.add("winner-computer");
        
    } else if (numberOfMatchesCalculate === 5 && scorePlayerCalculate === scoreComputerCalculate) {
        theWinner.innerHTML = `It's a Tie No Winner!<br/> Player: ${scorePlayerCalculate} \xa0 vs \xa0 Computer: ${scoreComputerCalculate}`;
        theWinner.classList.remove("winner-computer");
        theWinner.classList.remove("winner-player");
    }

    if (numberOfMatchesCalculate === 6) {
        alert("New Game?");
        resetGame();
    }

}

/**
 * Reset all game elements
 */
function resetGame() {

    //Reset winner rule point
    let resetWinnerRule = document.getElementById("winner-rule-point");
    resetWinnerRule.textContent = "Welcome to Spock Game! Let's Play?";

    //reset winner-rule-point color
    resetWinnerRule.classList.remove("winner-player");
    resetWinnerRule.classList.remove("winner-computer");

    //Reset player score
    document.getElementById("player-score").textContent = 0;
    //Reset computer score
    document.getElementById("computer-score").textContent = 0;
    //Reset matches counter
    document.getElementById("matches-counter").textContent = 0;
    //Reset the winner message
    document.getElementById("the-winner").textContent = "";
    //Reset images to rock
    let playerImageReset = document.getElementById("player-hand");
    playerImageReset.src = "assets/images/icon-rock-player.svg";

    let computerImageReset = document.getElementById("computer-hand");
    computerImageReset.src = "assets/images/icon-rock-computer.svg";
}




