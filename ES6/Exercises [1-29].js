//1 Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }


//2 Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();


//3 Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


//4 Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
    return new Date();
  };


//5 Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


//6 Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;


//7 Use the Rest Parameter with Function Parameters
const sum = (...args) => args.reduce((a, b) => a + b, 0);


//8 Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


//9 Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  // Only change code above this line


//10 Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2;
  
  // Only change code above this line


//11 Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const { today: {low: lowToday}} = LOCAL_FORECAST;
  const { today: {high: highToday}} = LOCAL_FORECAST;
  
  // Only change code above this line


//12 Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[b, a] = [a, b];
console.log(a, b);


//13 Destructuring via rest elements
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);


//14 Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({ max, min }) => (max + min) / 2.0;
  // Only change code above this line


//15 Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);


//16 Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => ({name, age, gender});


//17 Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);


//18 Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'


//19 Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }  
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }  
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius


//20 Create a Module Script
<html>
  <body>
    <script type = "module" src = "index.js"></script>
  </body>
</html>


//21 Use export to Share a Code Block
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  export { uppercaseString };
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }


//22 Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");


//23 Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


//24 Create an Export Fallback with export default
export default function subtract(x, y) {
    return x - y;
  }


//25 Import a Default Export
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);


//26 Create a JavaScript Promise
const makeServerRequest1 = new Promise((resolve, reject) => {});


//27 Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")// Change this line
    } else {      
      reject("Data not received")// Change this line
    }
  });


//28 Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });


//29 Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });