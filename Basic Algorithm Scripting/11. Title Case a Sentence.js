function titleCase(str) {
    let words = str.split(" ");
    let toUpper = [];
  
    for (let word in words) {
      toUpper[word] = words[word][0].toUpperCase() + words[word].slice(1).toLowerCase();
    }
    return toUpper.join(" ");
  }
  
  console.log(titleCase("sHoRt AnD sToUt"));