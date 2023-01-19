function telephoneCheck(str) {
    let regexOne = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
    let regexTwo = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (regexOne.test(str)) {
        return true;
    } 
    else {
        return regexTwo.test(str) ? true : false
    }
}
  
console.log(telephoneCheck("555-555-5555"));