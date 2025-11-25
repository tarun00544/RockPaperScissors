let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

 const drawGame = (choice) => {
  msg.innerText = `It's a draw! You both chose ${choice}. Play again!`;
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) =>{
    //comp choice
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        //draw game
        drawGame(userchoice);
    }else {
        let userWin = true;
        if(userchoice === "rock"){
            //scissors,  paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper"){
            //rock //scissors
            userWin = compchoice === "scissors" ? false : true;
        }
        else{
            //rock //paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});