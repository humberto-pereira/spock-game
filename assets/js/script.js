//wait for the DOM loading before running the game
//get the button elements and add event listeners to them

//snipet from love-maths
document.addEventListener("DOMContentLoaded", function() {
    let clickedButtons = document.getElementsByTagName("button");
    for (let button of clickedButtons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute("data-type");
            checkWinner(playerChoice);
        })      
    }
})

