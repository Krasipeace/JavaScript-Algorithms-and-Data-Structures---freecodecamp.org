function translatePigLatin(str) {
    return str.replace(/^[aeiou]\w*/, "$&way")
              .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
  
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));