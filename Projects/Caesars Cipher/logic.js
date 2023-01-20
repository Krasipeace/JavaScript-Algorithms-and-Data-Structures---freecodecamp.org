function rot13(str) {
    let output = "";

    for (let i = 0; i < str.length; i++) {

        let asciiNumber = str[i].charCodeAt();

        if (asciiNumber >= 65 && asciiNumber <= 77) {
            output += String.fromCharCode(asciiNumber + 13)
        }
        else if (asciiNumber >= 78 && asciiNumber <= 90) {
            output += String.fromCharCode(asciiNumber - 13)
        }
        else {
            output += str[i];
        }
    }

    return output;
}

let submitButtonEvent = document.getElementById("submitButton");

submitButtonEvent.addEventListener("click", function () {
    'use strict';

    let value = document.getElementById("inputString").value;
    let notification = document.getElementById("notification");

    notification.innerHTML = rot13(value.toString());
});