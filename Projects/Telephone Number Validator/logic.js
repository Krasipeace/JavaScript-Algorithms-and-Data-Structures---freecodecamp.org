function telephoneCheck(str) {
    let regexOne = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
    let regexTwo = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (!regexOne.test(str)) {
        return regexTwo.test(str);
    }

    return true;
}

let submitButtonEvent = document.getElementById("submitButton");

submitButtonEvent.addEventListener("click", function () {
    'use strict';

    let value = document.getElementById("inputString").value;
    let notification = document.getElementById("notification");

    if (telephoneCheck(value)) {
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a valid US phone number`;
    }
    else {
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is not a valid US phone number`;
    }
});