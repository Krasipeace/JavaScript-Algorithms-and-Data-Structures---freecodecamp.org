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
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog2.name = "Happy Coder";
  // Only change code below this line

  
// 88 Add New Properties to a JavaScript Object
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog3.bark = "woof";

  
//89 Delete Properties from a JavaScript Object
// Setup
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog4.tails;


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
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Battle Beast",
    "title": "Ciscus of Doom",
    "release_year": 2022,
    "formats": [
      "MP3",
      "CD",
      "Spotify"
    ]
  }
];


//93 Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];


//94 Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];


//95 Record Collection 
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {
    records[id][prop] = [value];
  } else if (prop == "tracks" && value != "") {
    records[id][prop].push(value);
  } else if (value == "") {
    delete records[id][prop];
  }
  
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');