const add7 = (number) => {
  return number + 7;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const capitalise = (word) => {
  let firstLetter = word[0].toUpperCase();
  let rest = word.substr(1).toLowerCase();

  return firstLetter + rest;
};

const lastLetter = (str) => {
  return str.charAt(str.length - 1);
};

console.log("any number + 7 --->", add7(23));
console.log("multipl    y 2 number ---->", multiply(7, 11));

console.log("Please capitalise dog --->", capitalise("dog"));
console.log("Please capitalise BeaUtiful --->", capitalise("BeaUtiful"));
console.log("Please capitalise LeMoN --->", capitalise("LeMoN"));
console.log("Please capitalise SEXY --->", capitalise("SEXY"));
console.log("The last letter in the word dog is ", lastLetter("dog"));
console.log(
  "The last letter in the word smartphone is ",
  lastLetter("smartphone")
);
console.log(
  "The last letter in the word Playstation is ",
  lastLetter("Playstation")
);
