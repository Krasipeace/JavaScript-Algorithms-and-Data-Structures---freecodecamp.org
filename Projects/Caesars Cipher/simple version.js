function rot13(str){

  let output="";

  for (let i = 0; i < str.length; i++){

      let asciiNumber = str[i].charCodeAt();

      if (asciiNumber >= 65 && asciiNumber <= 77){
          output += String.fromCharCode(asciiNumber + 13)
      }
      else if (asciiNumber >= 78 && asciiNumber <= 90){
          output += String.fromCharCode(asciiNumber - 13)
      }
      else{
          output += str[i];
      }
  }

  return output;
}
  
console.log(rot13("SERR PBQR PNZC"));