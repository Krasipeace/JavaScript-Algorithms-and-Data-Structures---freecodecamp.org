Array.prototype.myMap = function(callback) {
    let array = [];
  
    for (let i = 0; i < this.length; i++) {
      array.push(callback(this[i], i, this));
    }
  
    return array;
  };
  
  console.log([23, 65, 98, 5, 13].myMap(item => item * 2));
  
  console.log(["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()));
  
  console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]));