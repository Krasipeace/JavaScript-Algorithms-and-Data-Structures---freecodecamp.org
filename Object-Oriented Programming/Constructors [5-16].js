// 5 Define a Constructor Function
function Dog() {
    this.name = "Ares";
    this.color = "Brown";
    this.numLegs = 4;
  }
// 6 Use a Constructor to Create Objects
let hound = new Dog();


// 7 Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
}
let terrier = new Dog("Ares", "White");


// 8 Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
let myHouse = new House(3);
  
console.log(myHouse instanceof House);


// 9 Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProperties = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProperties.push(property);
    }
}
  
console.log(ownProperties);


// 10 Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 2;

let beagle2 = new Dog("Snoopy");


// 11 Iterate Over All Properties
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle3 = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let prop in beagle) {
    if (beagle3.hasOwnProperty(prop)) {
      ownProps.push(prop);
    } else {
      prototypeProps.push(prop);
    }  
  }
  
  console.log(ownProps);
  console.log(prototypeProps);


// 12 Understand the Constructor Property
function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } 

    return false; 
  }


// 13 Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


// 14 Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


// 15 Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}

let briard = new Dog("Ares");

console.log(Dog.prototype.isPrototypeOf(briard));


// 16 Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}

let dog = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(dog);  // yields true

console.log(dog.isPrototypeOf(Dog.prototype));