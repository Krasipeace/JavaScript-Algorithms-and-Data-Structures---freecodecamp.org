function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
  
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));