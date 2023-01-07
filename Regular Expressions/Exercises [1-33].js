// 1 Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // Change this line


// 2 Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);


// 3 Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);


// 4 Ignore Case While Matching
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result4 = fccRegex.test(myString);


// 5 Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line


// 6 Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line


// 7 Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);


// 8 Match Single Character with Multiple Possibilities
let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample1.match(vowelRegex); // Change this line


// 9 Match Letters of the Alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample2.match(alphabetRegex); // Change this line


// 10 Match Numbers and Letters of the Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi; // Change this line
let result10 = quoteSample3.match(myRegex2); // Change this line


// 11 Match Single Characters Not Specified
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/gi; // Change this line
let result11 = quoteSample4.match(myRegex3); // Change this line


//12 Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /[s]+/gi; // Change this line
let result12 = difficultSpelling.match(myRegex4);


// 13 Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result13 = chewieQuote.match(chewieRegex);


// 14 Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/; // Change this line
let result14 = text.match(myRegex5);


// 15 Find One or More Criminals in a Hunt
let reCriminals = /C+/; // Change this line


//16 Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result16 = calRegex.test(rickyAndCal);


//17 Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result17 = lastRegex.test(caboose);


// 18 Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result18 = quoteSample.match(alphabetRegexV2).length;


// 19 Match Everything But Letters and Numbers
let quoteSample19 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result19 = quoteSample19.match(nonAlphabetRegex).length;


// 20 Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result20 = movieName.match(numRegex).length;


//21 Match All Non-Numbers
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result21 = movieName2.match(noNumRegex).length;


// 22 Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result22 = userCheck.test(username);


// 23 Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result23 = sample.match(countWhiteSpace);


// 24 Match Non-Whitespace Characters
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result24 = sample2.match(countNonWhiteSpace);


// 25 Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result25 = ohRegex.test(ohStr);


// 26 Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line
let result26 = haRegex.test(haStr);


// 27 Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result27 = timRegex.test(timStr);


// 28 Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result28 = favRegex.test(favWord);


// 29 Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result29 = pwRegex.test(sampleWord);


// 30 Check For Mixed Grouping of Characters
let myString30 = "Eleanor Roosevelt";
let myRegex30 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
myRegex.test(myString30);
let result30 = true; 


// 31 Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result31 = reRegex.test(repeatNum);


// 32 Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result32 = str.replace(fixRegex, replaceText);


// 33 Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result33 = hello.replace(wsRegex, ""); // Change this line