//wait for the DOM loading before running the game
//get the button elements and add event listeners to them

//based on love-maths code
document.addEventListener("DOMContentLoaded", function() {
    let clickedButtons = document.getElementsByTagName("button");
    for (let button of clickedButtons) {
        button.addEventListener("click", function(){
        // Pass both variables as arguments to the checkWinner() function    
        let playerChoice = this.getAttribute("data-type");
        let computerChoice = generateComputerChoice();
        displayGameImage(playerChoice, computerChoice);
        checkWinner(playerChoice, computerChoice);
        })      
    }
})

function generateComputerChoice() {
    let computerChoiceArray = ["rock-computer", "lizard-computer", "paper-computer", "scissors-computer", "spock-computer"];
    let i = Math.floor(Math.random() * computerChoiceArray.length);
    let computerChoiceI = computerChoiceArray[i];
    return computerChoiceI
}


//Check playerChoice against computerChoice and return the winner or a tie
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === "scissors-player" &&  computerChoice === "rock-computer") {
        alert("computer win: Rock crushes scissors");
    } else if (playerChoice === "rock-player" && computerChoice === "scissors-computer") {
        alert("player win: Rock crushes scissors");

    } else if (playerChoice === "paper-player" && computerChoice === "scissors-computer") {
        alert("computer win: Scissors cut paper");
    } else if (playerChoice === "scissors-player" && computerChoice === "paper-computer") {
        alert("player win: Scissors cut paper");
    
    } else if (playerChoice === "rock-player" && computerChoice === "paper-computer") {
        alert("computer win: Paper covers rock");
    } else if (playerChoice === "paper-player" && computerChoice === "rock-computer") {
        alert("player win: Paper covers rock");
    
    } else if (playerChoice === "lizard-player" && computerChoice === "rock-computer") {
        alert("computer win: rock crushes lizard");
    } else if (playerChoice === "rock-player" && computerChoice === "lizard-computer") {
        alert("player win: rock crushes lizard");
    
    } else if (playerChoice === "spock-player" && computerChoice === "lizard-computer") {
        alert("computer win: Lizard poisons Spock");
    } else if (playerChoice === "lizard-player" && computerChoice === "spock-computer") {
        alert("player win: Lizard poisons Spock");
    
    } else if (playerChoice === "scissors-player" && computerChoice === "spock-computer") {
        alert("computer win: Spock smashes scissors");
    } else if (playerChoice === "spock-player" && computerChoice === "scissors-computer") {
        alert("player win: Spock smashes scissors");
    
    } else if (playerChoice === "lizard-player" && computerChoice === "scissors-computer") {
        alert("computer win: Scissors decapitate lizard");
    } else if (playerChoice === "scissors-player" && computerChoice === "lizard-computer") {
        alert("player win: Scissors decapitate lizard");
    
    } else if (playerChoice === "paper-player" && computerChoice === "lizard-computer") {
        alert("computer win: Lizard eats paper");
    } else if (playerChoice === "lizard-player" && computerChoice === "paper-computer") {
        alert("player win: Lizard eats paper");
    
    } else if (playerChoice === "spock-player" && computerChoice === "paper-computer") {
        alert("computer win: Paper disproves Spock");
    } else if (playerChoice === "paper-player" && computerChoice === "spock-computer") {
        alert("player win: Paper disproves Spock");
    
    } else if (playerChoice === "rock-player" && computerChoice === "spock-computer") {
        alert("computer win: Spock vaporizes rock");
    } else if (playerChoice === "spock-player" && computerChoice === "rock-computer") {
        alert("player win: Spock vaporizes rock");
    
    } else {
        alert(`No winner: it's a tie ${playerChoice} and ${computerChoice}`);
    }
        
}

function displayGameImage(playerChoice, computerChoice) {
    let imageDictionary = {
        rockPlayer: "assets/images/icon-rock-player.svg",
        scissorsPlayer:"assets/images/icon-scissors-player.svg",
        paperPlayer:"assets/images/icon-paper-player.svg",
        lizardPlayer:"assets/images/icon-lizard-player.svg",
        spockPlayer:"assets/images/icon-spock-player.svg",

        rockComputer: "assets/images/icon-rock-computer.svg",
        scissorsComputer:"assets/images/icon-scissors-computer.svg",
        paperComputer:"assets/images/icon-paper-computer.svg",
        lizardComputer:"assets/images/icon-lizard-computer.svg",
        spockComputer:"assets/images/icon-spock-computer.svg",
    }
    let playerImageElement = document.getElementById("player-hand");
    let computerImageElement = document.getElementById("computer-hand");
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

    if (computerChoice === "scissor-computer") {
        computerImageElement.src = imageDictionary.scissorsComputer;
    } else if (computerChoice === "rock-player") {
        computerImageElement.src = imageDictionary.rockComputer;
    } else if (computerChoice === "paper-computer") {
        computerImageElement.src = imageDictionary.paperComputer;
    } else if (computerChoice === "lizard-computer") {
        computerImageElement.src = imageDictionary.lizardComputer;
    } else if (computerChoice === "spock-computer") {
        computerImageElement.src = imageDictionary.spockComputer;
    }
}

let debug = imageDictionary.rockPlayer
    console.log(debug);
