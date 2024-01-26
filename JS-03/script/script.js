let answer = prompt("Please enter a number to play FizzBuzz");

while(!/^[0-9]+$/.test(answer)) {
    alert("Please insert a NUMBER!");
    answer = prompt("Please enter a number to play FizzBuzz");
}
alert("Thanks, you entered a number. Please now check the console.");
console.log("Number entered:",answer);