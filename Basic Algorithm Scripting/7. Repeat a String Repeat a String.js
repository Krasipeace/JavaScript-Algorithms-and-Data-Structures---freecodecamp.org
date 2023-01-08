function repeatStringNumTimes(str, num) {
    let repeatedStr = "";
    for (let i = 0; i < num; i++) {
      repeatedStr += str;
    }
  
    return repeatedStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));