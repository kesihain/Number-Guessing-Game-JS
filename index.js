let button = document.getElementById("start")

button.addEventListener("click",guessingGame);

function guessingGame(){
    let randomNumber = Math.floor(Math.random() * 11)
    let guess = window.prompt("Guess your number here")
    let guessed=false;
    while(guessed == false)
        if (guess==randomNumber){
            alert("Congratulations!! You have guessed the correct number")
            guessed= true
        }else if (guess<randomNumber){
            guess = window.prompt("Too low. Try again")
        }else{
            guess = window.prompt("Too high. Try again")
        }
}