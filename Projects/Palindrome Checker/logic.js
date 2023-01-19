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
    let displayWord = document.getElementById("displayWord");

    if(palindrome(value)) { 
    notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a palindrome!`;    
    displayWord.innerHTML = `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');    
    } else { 
    notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is not a palindrome!`; 
    displayWord.innerHTML = `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');  
    }
}); 