let delayInMilliseconds = 3000;

setTimeout(() => {
  let answer = prompt("Please enter a number to play FizzBuzz");

  while (!/^[0-9]+$/.test(answer)) {
    alert("Please insert a NUMBER!");
    answer = prompt("Please enter a number to play FizzBuzz");
  }
  alert("Thanks, you entered a number. Please now check the console.");
  console.log("Number entered:", answer);

  for (i = 1; i <= answer; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i, "<-- FIZZBUZZ!!!");
    } else if (i % 5 === 0) {
      console.log(i, "<-- BUZZ");
    } else if (i % 3 === 0) {
      console.log(i, "<-- FIZZ");
    } else {
      console.log(i);
    }
  }

  setTimeout(() => {
    alert("Thank you for playing!! Please reload the page to try again")
  }, 5000)

}, delayInMilliseconds);


