// let delay = 3000;
// const choices = ["Rock", "Paper", "Scissors"];

// let cpuScore = 0;
// let userScore = 0;

// const getComputerChoice = (arr) => {
//   // gets random index
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   //gets random item
//   const item = arr[randomIndex];

//   return item;
// };

// const startRound = () => {
//   const computerChoice = getComputerChoice(choices);

// }

// const getPlayerChoice = () => {
//   alert(
//     "Welcome to Rock Paper Scissors! In a few seconds you will be asked to pick Rock, Paper or Scissors..."
//   );

//   let playerChoice = prompt(
//     "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
//   );

//   while (!/^[1-3]+$/.test(playerChoice)) {
//     alert(
//       "Please only insert number from 1 - 3! 1 - ROCK. 2 - PAPER. 3 - SCISSORS"
//     );
//     playerChoice = prompt(
//       "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
//     );
//   }

//   if (playerChoice == 1) {
//     playerChoice = "Rock";
//   }
//   if (playerChoice == 2) {
//     playerChoice = "Paper";
//   }
//   if (playerChoice == 3) {
//     playerChoice = "Scissors";
//   }

//   return playerChoice;
// };

// const userChoice = getPlayerChoice();

// const playRound = (compChoice, playerChoice) => {
//   if (compChoice === "Rock" && playerChoice === "Scissors") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Rock Beats Scissors! CPU WINS!!`);
//         cpuScore++
//   }
//   if (compChoice === "Paper" && playerChoice === "Rock") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Paper Beats Rock! CPU WINS!!`);
//         cpuScore++
//   }
//   if (compChoice === "Scissors" && playerChoice === "Paper") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Scissors Beats Paper! CPU WINS!!`);
//         cpuScore++
//   }
//   if (playerChoice === "Rock" && compChoice === "Scissors") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Rock Beats Scissors! YOU WIN!!`);
//         userScore++
//   }
//   if (playerChoice === "Paper" && compChoice === "Rock") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Paper Beats Rock! YOU WIN!!`);
//         userScore++
//   }
//   if (playerChoice === "Scissors" && compChoice === "Paper") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Scissors Beats Paper! YOU WIN!!`);
//         userScore++
//   }
//   if (playerChoice == compChoice) {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//     DRAW!`)
//   }

//   console.log(`User: ${userScore} and CPU: ${cpuScore}`)

// //   console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}`);
// };

// playRound(computerChoice, userChoice);

// alert("Welcome to Rock, Paper, Scissors")

// const playRound = () => {
//   const choices = ["Rock", "Paper", "Scissors"];
//   const getComputerChoice = (arr) => {
//   // gets random index
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   //gets random item
//   const item = arr[randomIndex];

//   return item;
// }
// const getPlayerChoice = () => {
//   let playerChoice = prompt(
//     "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
//   );

//   while (!/^[1-3]+$/.test(playerChoice)) {
//     alert(
//       "Please only insert number from 1 - 3! 1 - ROCK. 2 - PAPER. 3 - SCISSORS"
//     );
//     playerChoice = prompt(
//       "Please enter a number for selection: 1 - ROCK. 2 - PAPER. 3 - SCISSORS."
//     );
//   }

//   if (playerChoice == 1) {
//     playerChoice = "Rock";
//   }
//   if (playerChoice == 2) {
//     playerChoice = "Paper";
//   }
//   if (playerChoice == 3) {
//     playerChoice = "Scissors";
//   }

//   return playerChoice;
// };
// const compChoice = getComputerChoice(choices);
// const playerChoice = getPlayerChoice();

// console.log("CPU Choice -->", compChoice);
// console.log("Player Choice -->", playerChoice)

//   if (compChoice === "Rock" && playerChoice === "Scissors") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Rock Beats Scissors! CPU WINS!!`);
//         return computerScore++
//   }
//   if (compChoice === "Paper" && playerChoice === "Rock") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Paper Beats Rock! CPU WINS!!`);
//         return computerScore++
//   }
//   if (compChoice === "Scissors" && playerChoice === "Paper") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Scissors Beats Paper! CPU WINS!!`);
//         return computerScore++
//   }
//   if (playerChoice === "Rock" && compChoice === "Scissors") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Rock Beats Scissors! YOU WIN!!`);
//         return userScore++
//   }
//   if (playerChoice === "Paper" && compChoice === "Rock") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Paper Beats Rock! YOU WIN!!`);
//         return userScore++
//   }
//   if (playerChoice === "Scissors" && compChoice === "Paper") {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//         Scissors Beats Paper! YOU WIN!!`);
//         return userScore++
//   }
//   if (playerChoice == compChoice) {
//     console.log(`CPU CHOICE: ${compChoice}. PLAYER CHOICE: ${playerChoice}
//     DRAW!`)
//   }

//   // console.log(`User: ${userScore} and CPU: ${computerScore}`)
// };

// const playGame = () => {
//   // let userScore = 0;
//   // let computerScore = 0;
// alert("This game is first to 5 - you versus the computer. Lets Go.")
// playRound();
// playRound();
// playRound();
// playRound();
// playRound();

// }

// playGame();
// // playRound();

const playGameTwo = () => {
  let gameCounter = 0;
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i >= 2; i++) {
    const choices = ["Rock", "Paper", "Scissors"];
    const getComputerChoice = (arr) => {
      // gets random index
      const randomIndex = Math.floor(Math.random() * arr.length);

      //gets random item
      const item = arr[randomIndex];

      return item;
    };
    const getPlayerChoice = () => {
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

    let computerChoice = getComputerChoice(choices);
    let playerChoice = getPlayerChoice();
    console.log("CPU Choice: ", computerChoice);
    console.log("User Choice: ", playerChoice);

    gameCounter++;
    console.log("Count = ", gameCounter);
    console.log("userScore = ", userScore);
    console.log("computerScore = ", computerScore);
  }
};

playGameTwo();
