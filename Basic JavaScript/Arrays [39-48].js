//39 Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["chair", 10];


//40 Nest one Array within Another Array
// Only change code below this line
const myArray2 = [["Cows", 2], ["Bulls", 1]];


//41 Access Array Data with Indexes
const myArray3 = [50, 60, 70];
const myData = myArray3[0];


//42 Modify Array Data With Indexes
// Setup
const myArray4 = [18, 64, 99];

// Only change code below this line
myArray4[0] = 45;


//43 Access Multi-Dimensional Arrays With Indexes
const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray5[2][1];
  console.log(myData2);

  
//44 Manipulate Arrays With push()
// Setup
const myArray6 = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray6.push(["dog", 3]);


//45 Manipulate Arrays With pop()
// Setup
const myArray7 = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray7.pop();


//46 Manipulate Arrays With shift()
// Setup
const myArray8 = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray2 = myArray8.shift();


//47 Manipulate Arrays With unshift()
// Setup
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();

// Only change code below this line
myArray9.unshift(["Paul", 35]);


//48 Shopping List
const myList = [
    ["Chocolate Bar", 15], 
    ["Waffle", 10], 
    ["Icecream", 7],
    ["Cake", 20],
    ["Coffee", 11]];