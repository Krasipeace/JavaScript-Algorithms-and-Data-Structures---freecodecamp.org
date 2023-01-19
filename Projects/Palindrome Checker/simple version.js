function palindrome(str) { 
    let regex = /[\W_]/g; 
    
    let inputText = str.toLowerCase().replace(regex, ''); 
    let reversedText = inputText.split('').reverse().join('');   
    
    return reversedText === inputText; 
}

console.log(palindrome("exe"));
console.log(palindrome("Hello"));