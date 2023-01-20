function telephoneCheck(str) {
    let regexOne = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
    let regexTwo = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (!regexOne.test(str)) {
        return regexTwo.test(str);
    }

    return true;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)-555-5555"));