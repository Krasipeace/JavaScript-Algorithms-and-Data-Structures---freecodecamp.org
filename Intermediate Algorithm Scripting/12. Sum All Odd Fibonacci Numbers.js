function sumFibs(num) {
    let previous = 0;
    let current = 1;
    let result = 0;
  
    while (current <= num) {
      if (current % 2 !== 0) {
        result += current;
      }
      current += previous;
      previous = current - previous;
    }
  
    return result;
}

console.log(sumFibs(4));
console.log(sumFibs(1000));