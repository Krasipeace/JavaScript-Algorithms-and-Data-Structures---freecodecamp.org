Array.prototype.myFilter = function (callback) {
    const array = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) == true) {
        array.push(this[i]);
      }
    }
    
    return array;
  };