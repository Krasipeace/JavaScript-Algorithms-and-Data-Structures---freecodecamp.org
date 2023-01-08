function mutation(arr) {
    let string = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
  
    for (let i = 0; i < string.length; i++) {
      if (target.indexOf(string[i]) < 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));