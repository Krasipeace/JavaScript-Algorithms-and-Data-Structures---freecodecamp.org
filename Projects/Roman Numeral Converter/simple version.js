function convertToRoman(num) {
  const convertToRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = [];
  let romanKeys = Object.keys(convertToRoman);
  let currentValue;
  let index;
  let count = 1;

  for (let number in convertToRoman) {

    currentValue = convertToRoman[number];
    index = romanKeys.indexOf(number);

    while (num >= currentValue) {
      if (count < 4) {
        roman.push(number);
      }
      else {
        if (roman.indexOf(romanKeys[index - 1]) > - 1) {
          roman.splice(roman.indexOf(romanKeys[index - 1]));
          roman.push(romanKeys[index], romanKeys[index - 2]);
        }
        else {
          roman.splice(-3);
          roman.push(romanKeys[index], romanKeys[index - 1]);
        }
      }

      num -= currentValue;
      count++;
    }

    count = 1;
  }

  return roman.join("");
}

console.log(convertToRoman(1036));
console.log(convertToRoman(127));
console.log(convertToRoman(13));
console.log(convertToRoman(7));