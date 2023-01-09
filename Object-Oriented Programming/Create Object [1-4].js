// 1 Create a Basic JavaScript Object
let dog = {
  name: "Ares",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";} //3
};

// 2 Use Dot Notation to Access the Properties of an Object
console.log(dog.name);
console.log(dog.numLegs);

// 3 Create a Method on an Object
console.log(dog.sayLegs);


// 4 Make Code More Reusable with the this Keyword
let dog2 = {
  name: "Ares",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} //3
};
console.log(dog.sayLegs());