//96 Iterate with JavaScript While Loops
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

//97 Iterate with JavaScript For Loops
// Setup
const myArray2 = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray2.push(i);
}

//98 Iterate Odd Numbers With a For Loop
// Setup
const myArray3 = [];

// Only change code below this line
for (let i = 1; i <= 9; i += 2) {
  myArray3.push(i);
}

//99 Count Backwards With a For Loop
// Setup
const myArray4 = [];

// Only change code below this line
for (let i = 9; i >= 1; i-= 2) {
  myArray4.push(i);
}

//100 Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

//101 Nesting For Loops
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//102 Iterate with JavaScript Do...While Loops
// Setup
const myArray5 = [];
let i2 = 10;

// Only change code below this line
do {
  myArray5.push(i2);
  i2++;
} while (i2 < 5);

//103 Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  }
  
  return sum(arr, n - 1) + arr[n - 1];
  
  // Only change code above this line
}

//104 Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } 
      else {
        return "No such property";
      }
    }
  }
  return "No such contact";

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//105 Generate Random Fractions with JavaScript
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

//106 Generate Random Whole Numbers with JavaScript
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

//107 Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}

//108 Use the parseInt Function
function convertToInteger(str) {
  let i = parseInt(str);

  return i;
}

convertToInteger("56");

//109 Use the parseInt Function with a Radix
function convertToInteger(str) {
  let bin = parseInt(str, 2);

  return bin;
}

convertToInteger("10011");

//110 Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//111 Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);

//112 Use Recursion to Create a Countdown
// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } 
  let countArray = countdown(n - 1);
  countArray.unshift(n);
  
  return countArray;
}

console.log(countdown(5))
// Only change code above this line

//113 Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
   return [];
 } 
   let arr = rangeOfNumbers(startNum, endNum - 1);
   arr.push(endNum);

   return arr;
};