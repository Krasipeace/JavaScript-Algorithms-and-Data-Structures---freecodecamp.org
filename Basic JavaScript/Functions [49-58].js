//49 Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
  
reusableFunction();


//50 Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
  
functionWithArgs(5, 10);


//51 Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
  }
  
const result = timesFive(5);


//52 Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//53 Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
    let myVar = 10;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);


//54 Global vs. Local Scope in Functions
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


//55 Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}

// Only change code above this line

addThree();
addFive();


//56 Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


//57 Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);  
  
    return arr.shift();;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


//58 Understanding Boolean Values
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }