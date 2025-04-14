
var computerScore = 0;
var humanScore = 0;


function getComputerChoice() {
    let computerchoice;
    let computerchoicerandom = Math.random();
    console.log(computerchoicerandom)

    if (computerchoicerandom <= 0.33) {
        computerchoice = "Rock";
        console.log(`Computer Chose: ${computerchoice}`);

    }
    else if (computerchoicerandom <= .66) {
        computerchoice = "Scissor";
        console.log(computerchoice);
        console.log(`Computer Chose: ${computerchoice}`);
    }
    else {
        computerchoice = "Paper";
        console.log(`Computer Chose: ${computerchoice}`);
    }
    return computerchoice;

}

const container = document.querySelector("#container");


const content = document.createElement("p");
const welcome = document.createElement("div");

welcome.textContent = " Welcome to RPS, click button below to start";
container.appendChild(welcome);

content.innerHTML = ` 
<button class= "btn" id="rock">Rock</button>    
    <button class= "btn" id="paper">Paper</button>
    <button class= "btn"  id="scissor">Scissor</button>
    <button id="reset">Reset</button>`
    ;



container.appendChild(content);

const reset = document.querySelector("#reset");


reset.addEventListener("click", ()=>{
    result.textContent = "";
    score.textContent = "";
    computerScore = 0;
    humanScore = 0;

});


const rock = document.querySelector("#rock");
rock.addEventListener("click", ()=>{
    hc="Rock";
    const computerSelection = getComputerChoice();
    playRound(hc,computerSelection)
    ;

})

const paper = document.querySelector("#paper");
paper.addEventListener("click", ()=>{
    hc="Paper";
    console.log(hc);
    const computerSelection = getComputerChoice();
    playRound(hc,computerSelection)
    ;

})
const scissor = document.querySelector("#scissor")
scissor.addEventListener("click", ()=>{
    hc="Scissor";
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

 const result = document.createElement("p");
 const score = document.createElement("p");

function playRound(hc, computerchoice) {

    container.appendChild(result);
    container.appendChild(score);



    if (hc === "Rock" && computerchoice === "Paper") {
        

        result.textContent = `Computer Selected ${computerchoice}, You Loose`;

        console.log("You Loose");
        computerScore = computerScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Paper" && computerchoice === "Paper") {

        result.textContent = `Computer Selected ${computerchoice} Its a Draw`;

        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;

    }
    else if (hc === "Scissor" && computerchoice === "Paper") {
        result.textContent = `Computer Selected ${computerchoice} You Win`;

        console.log("You Win");

        humanScore = humanScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Rock" && computerchoice === "Rock") {
        result.textContent = `Computer Selected ${computerchoice} Its a Draw`;

        console.log("It's a Draw");

        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Paper" && computerchoice === "Rock") {
        result.textContent = `Computer Selected ${computerchoice} You Win`;

        console.log("You Win");


        humanScore = humanScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Scissor" && computerchoice === "Rock") {
        console.log("You Loose");
        result.textContent = `Computer Selected ${computerchoice} You Loose`;

        computerScore = computerScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Scissor" && computerchoice === "Scissor") {
        console.log("It's a Draw");
        result.textContent = `Computer Selected ${computerchoice} Its a Draw`;

        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Rock" && computerchoice === "Scissor") {
        console.log("You Win");
        result.textContent = `Computer Selected ${computerchoice} You Win`;

        humanScore = humanScore + 1;
        score.textContent = `Computer score is ${computerScore} your score is ${humanScore}`;
    }
    else if (hc === "Paper" && computerchoice === "Scissor") {
        computerScore = computerScore + 1;
        result.textContent = `Computer Selected ${computerchoice} You Loose`;



    }
    console.log(`Your total score is ${humanScore} and computer's score is ${computerScore}`)
    let scorefinal= `Your total score is ${humanScore} and computer's score is ${computerScore}`;

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
