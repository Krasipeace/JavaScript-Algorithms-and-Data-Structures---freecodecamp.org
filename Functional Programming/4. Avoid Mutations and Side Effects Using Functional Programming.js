// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

let newValue = incrementer();

console.log(newValue);
console.log(fixedValue);