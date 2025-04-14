
var computerScore = 0;
var humanScore = 0;


function getComputerChoice() {
    let computerchoice;
    let computerchoicerandom = Math.random();
    console.log(computerchoicerandom)

    if (computerchoicerandom <= 0.33) {
        computerchoice = "rock";
        console.log(`Computer Chose: ${computerchoice}`);

    }
    else if (computerchoicerandom <= .66) {
        computerchoice = "scissor";
        console.log(computerchoice);
        console.log(`Computer Chose: ${computerchoice}`);
    }
    else {
        computerchoice = "paper";
        console.log(`Computer Chose: ${computerchoice}`);
    }
    return computerchoice;

}

const container = document.querySelector("#container");


const content = document.createElement("p");
content.textContent = " Welcome to RPS, click button below to start"

content.innerHTML = ` <button class= "btn" id="rock">Rock</button>    
    <button class= "btn" id="paper">Paper</button>
    <button class= "btn"  id="scissor">Scissor</button>`;
    const btn = document.querySelector(".btn");


container.appendChild(content);


const rock = document.querySelector("#rock");
rock.addEventListener("click", ()=>{
    hc="rock";
    const computerSelection = getComputerChoice();
    playRound(hc,computerSelection)
    ;

})

const paper = document.querySelector("#paper");
paper.addEventListener("click", ()=>{
    hc="paper";
    console.log(hc);
    const computerSelection = getComputerChoice();
    playRound(hc,computerSelection)
    ;

})
const scissor = document.querySelector("#scissor")
scissor.addEventListener("click", ()=>{
    hc="scissor";
    console.log(hc);
    const computerSelection = getComputerChoice();
    playRound(hc,computerSelection)
    ;

})



 //function getHumanChoice() {


//    var hc = prompt("Enter Rock,Paper or Scissor");

//      hc = hc.toLowerCase();
// console.log(hc);
//   return hc;

 // }


function playRound(hc, computerchoice) {

    if (hc === "rock" && computerchoice === "paper") {
        console.log("You Loose");
        computerScore = computerScore + 1;
    }
    else if (hc === "paper" && computerchoice === "paper") {
        console.log("It's a Draw");
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;

    }
    else if (hc === "scissor" && computerchoice === "paper") {
        console.log("You Win");
        humanScore = humanScore + 1;
    }
    else if (hc === "rock" && computerchoice === "rock") {
        console.log("It's a Draw");
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;

    }
    else if (hc === "paper" && computerchoice === "rock") {
        console.log("You Win");
        humanScore = humanScore + 1;
    }
    else if (hc === "scissor" && computerchoice === "rock") {
        console.log("You Loose");
        computerScore = computerScore + 1;
    }
    else if (hc === "scissor" && computerchoice === "scissor") {
        console.log("It's a Draw");
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
    }
    else if (hc === "rock" && computerchoice === "scissor") {
        console.log("You Win");
        humanScore = humanScore + 1;
    }
    else if (hc === "paper" && computerchoice === "scissor") {
        computerScore = computerScore + 1;
    }
    console.log(`Your total score is ${humanScore} and computer's score is ${computerScore}`);

}





// for (let i = 1; i <= 1; i++) {

//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//     console.log(`Round ${i}`);
// }

// if (humanScore > computerScore) {
//     console.log(`User score: ${humanScore} \nComputer Score: ${computerScore} \nYou are the winner`)
// }
// else {
//     console.log(`User score: ${humanScore} \nComputer Score: ${computerScore} \nYou are the looser`)
// }
