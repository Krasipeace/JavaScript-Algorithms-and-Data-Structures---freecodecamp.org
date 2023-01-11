function addTogether() {
    const [a, b] = arguments;
    if (typeof(a) != "number") {
      return undefined;
    }
  
    if (arguments.length == 1) {
      return (b) => addTogether(a, b);
    }
  
    if (typeof(b) != "number") {
      return undefined;
    }
  
    return a + b;
}

console.log(addTogether(2,3));
console.log(addTogether(5, undefined));
console.log(addTogether(0,0));
console.log(addTogether(-20,20));
console.log(addTogether(-1,-2));
console.log(addTogether(1,"https://www.youtube.com/watch?v=dQw4w9WgXcQ"));