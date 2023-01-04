//1 comment-your-javascript-code

// one line comment

/* mult- line
comments */ 


//2 understanding-uninitialized-variables

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// 3 Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";


//4 declare-javascript-variables
var myName;


//5 storing-values-with-the-assignment-operator
// Setup
var a = 7 // Only change code below this line


//6 assigning-the-value-of-one-variable-to-another
// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line


//7 initializing-variables-with-the-assignment-operator
var a = 9;

//8 declare-string-variables
var myFirstName = "Krasimir";
var myLastName = "Dramaliev";

//9 understanding-case-sensitivity-in-variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//10 explore-differences-between-the-var-and-let-keywords
let catName = "Oliver";
let catSound = "Meow!";

//11 declare-a-read-only-variable-with-the-const-keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//12 add-two-numbers-with-javascript
const sum = 10 + 10;

//13 subtract-one-number-from-another-with-javascript
const difference = 45 - 33;

//14 multiply-two-numbers-with-javascript
const product = 8 * 10;

//15 divide-one-number-by-another-with-javascript
const quotient = 66 / 33;

//16 increment-a-number-with-javascript
let myVar1 = 87;

// Only change code below this line
myVar++;

//17 decrement-a-number-with-javascript
let myVar2 = 11;

// Only change code below this line
myVar--;

//18 create-decimal-numbers-with-javascript
var myDecimal = 5.7;

// Only change code below this line

//19 multiply-two-decimals-with-javascript
const product2 = 2.0 * 2.5;

//20 divide-one-decimal-by-another-with-javascript
const quotient2 = 4.4 / 2.0; // Change this line

//21 finding-a-remainder-in-javascript
const remainder = 11 % 3;

//22 compound-assignment-with-augmented-addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//23 compound-assignment-with-augmented-subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//24 compound-assignment-with-augmented-multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

//25 compound-assignment-with-augmented-division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//26 escaping-literal-quotes-in-strings 
const myStr1 = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

//27 quoting-strings-with-single-quotes
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

//28 escape-sequences-in-strings
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//29 concatenating-strings-with-plus-operator
const myStr4 = "This is the start." + " " + "This is the end."; // Change this line

//30 concatenating-strings-with-the-plus-equals-operator
let myStr5 = "This is the first sentence.";
myStr5 += " ";
myStr5 += "This is the second sentence."

//31 constructing-strings-with-variables
// Only change code below this line
const myName = "Krasimir";
const myStr6 = "My name is " + myName + " and i am well!";

//32 appending-variables-to-strings
// Change code below this line
const someAdjective = "awesome";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

//33 find-the-length-of-a-string
// Setup
let lastNameLength = 0;
const lastName2 = "Lovelace";

// Only change code below this line
lastNameLength = lastName2.length;

//34 use-bracket-notation-to-find-the-first-character-in-a-string
// Setup
let firstLetterOfLastName = "";
const lastName3 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName3[0]; // Change this line

//35 use-bracket-notation-to-find-the-nth-character-in-a-string
// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName4[2]; // Change this line

//36 use-bracket-notation-to-find-the-last-character-in-a-string
// Setup
const lastName5 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName5[lastName5.length - 1]; // Change this line

//37 use-bracket-notation-to-find-the-nth-to-last-character-in-a-string

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//38 word-blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const SPACE = " ";

const wordBlanks = myAdjective + SPACE + myNoun + SPACE + myVerb + SPACE + myAdverb; // Change this line
// Only change code above this line