function smallestCommons(arr) {
    let [min, max] = arr.sort((a, b) => a - b);
    let numberDivisors = max - min + 1;

    let limit = 1;
    for (let i = min; i <= max; i++) {
      limit *= i;
    }

    for (let j = max; j <= limit; j += max) {
      let count = 0;

      for (let i = min; i <= max; i++) {
        if (j % i === 0) {
          count += 1;
        }
      }
     
      if (count === numberDivisors) {
        return j;
      }
    }
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([13, 1]));