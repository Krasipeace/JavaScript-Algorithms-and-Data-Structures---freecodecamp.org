//83 Build JavaScript Objects
const myDog = {
    "name": "Ares",
    "legs": 15,
    "tails": 1,
    "friends": ["Phobos", "Deimos"]
  };


//84 Accessing Object Properties with Dot Notation
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;
  const shirtValue = testObj.shirt;


//85 Accessing Object Properties with Bracket Notation
// Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj2["an entree"];   // Change this line
  const drinkValue = testObj2["the drink"];    // Change this line


//86 Accessing Object Properties with Variables
// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj3[playerNumber];   // Change this line


//87 Updating Object Properties
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = "Happy Coder";
  // Only change code below this line

  
// 88 Add New Properties to a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = "woof";

  
//89 Delete Properties from a JavaScript Object
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;


//90 Using Objects for Lookups
// Setup
function phoneticLookup(val) {
    let result = "";
  
    let lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    };
  
    result = lookup[val];
  
    return result;
  }
  
  phoneticLookup("charlie");


//91 Using Objects for Lookups
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
  
    return "Not Found";
    // Only change code above this line
  }


//92 Manipulating Complex Objects