function palindrome(str) { 
    let regex = /[\W_]/g; 
    
    let inputText = str.toLowerCase().replace(regex, ''); 
    let reversedText = inputText.split('').reverse().join('');   
    
    return reversedText === inputText; 
}

let submitButtonEvent = document.getElementById("submitButton");

submitButtonEvent.addEventListener("click", function() { 
    'use strict'; 

    let value = document.getElementById("inputString").value; 
    let notification = document.getElementById("notification"); 

    if(palindrome(value)) { 
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a palindrome!`; 
    } 
    else { 
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is not a palindrome!`;
    }
}); 