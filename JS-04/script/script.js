let delay = 3000;
const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = (arr) => {
  // gets random index
  const randomIndex = Math.floor(Math.random() * arr.length);

  //gets random item
  const item = arr[randomIndex];

  return item;
};

const computerChoice = getComputerChoice(choices);

const getPlayerChoice = () => {
  alert(
    "Welcome to Rock Paper Scissors! In a few seconds you will be asked to pick Rock, Paper or Scissors..."
  );

  let playerChoice = prompt(
    "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
  );

  while (!/^[1-3]+$/.test(playerChoice)) {
    alert(
      "Please only insert number from 1 - 3! 1 - ROCK. 2 - PAPER. 3 - SCISSORS"
    );
    playerChoice = prompt(
      "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
    );
  }

  if (playerChoice == 1) {
    playerChoice = "Rock";
  }
  if (playerChoice == 2) {
    playerChoice = "Paper";
  }
  if (playerChoice == 3) {
    playerChoice = "Scissors";
  }

  return playerChoice;
};

const userChoice = getPlayerChoice();

const playRound = (compChoice, playerChoice) => {
  if (compChoice === "Rock" && playerChoice === "Scissors") {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
        Rock Beats Scissors! CPU WINS!!`);
  }
  if (compChoice === "Paper" && playerChoice === "Rock") {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
        Paper Beats Rock! CPU WINS!!`);
  }
  if (compChoice === "Scissors" && playerChoice === "Paper") {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
        Scissors Beats Paper! CPU WINS!!`);
  }
  if (playerChoice === "Rock" && compChoice === "Scissors") {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
        Rock Beats Scissors! YOU WIN!!`);
  }
  if (playerChoice === "Paper" && compChoice === "Rock") {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
        Paper Beats Rock! YOU WIN!!`);
  }
  if (playerChoice === "Scissors" && compChoice === "Paper") {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
        Scissors Beats Paper! YOU WIN!!`);
  }
  if (playerChoice == compChoice) {
    console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
    DRAW!`)
  }

//   console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}`);
};

playRound(computerChoice, userChoice);
