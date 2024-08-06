let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScore = 0;
let compScore = 0;
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");
const draw = () => {
    msg.innerText = "Game was draw.play again";
    msg.style.backgroundColor = "black"

}
const gencompchoices = () => {
    let option = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return option[idx];
}

const showWinner = (userwin, userChoice, compchoice) =>{
    if(userwin){
        msg.innerText = `you win ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore ++;
        userScorepara.innerText = userScore;

    }
    else{
        msg.innerText = `you loose ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    let compchoice = gencompchoices();
    if(userChoice === compchoice){
        return draw();
    }
    let userwin = true;
    if(userChoice === "paper"){
        //rock,scissor
       userwin = compchoice === "scissor" ? false : true;
    }
    else if(userChoice === "rock"){
        //paper,scissor
        userwin = compchoice === "paper" ? false : true;
    }
    else{
        //paper,rock
        userwin = compchoice === "rock" ? false : true; 
    }
    showWinner(userwin, userChoice ,compchoice);
}

choices.forEach((choice) =>{
   
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    })
})