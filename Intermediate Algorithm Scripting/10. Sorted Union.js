function uniteUnique() {
    return [...arguments].flat().filter((item, index, arr) => arr.indexOf(item) === index);
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));