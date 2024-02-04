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

console.log(
  `The Computer Selection is: ${computerChoice} and the Player Selection is: ${playerChoice}`
);
