let delay = 3000;
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = ((arr) => {
    // gets random index
    const randomIndex = Math.floor(Math.random() * arr.length);

    //gets random item
    const item = arr[randomIndex];

    return item;
})

const computerChoice = getComputerChoice(choices).toUpperCase(); 


alert(
    "Welcome to Rock Paper Scissors! In a few seconds you will be asked to pick Rock, Paper or Scissors..."
  );

 console.log(getComputerChoice(choices))
 console.log(getComputerChoice(choices))
 console.log(getComputerChoice(choices))
 console.log(getComputerChoice(choices))
 console.log(getComputerChoice(choices))

 console.log(computerChoice)
 console.log(computerChoice)
 console.log(computerChoice)
 console.log(computerChoice)
 console.log(computerChoice)
 



// setTimeout(() => {

// }, delay);

