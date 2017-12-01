//Replace With Alphabet Position

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// a being 1, b being 2, etc.

// As an example:
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

//My Answer
function alphabetPosition(text) {
  var filteredText = text.replace(/\W/g, ' ')
  var split = filteredText.split('')
  var newArray = []
  for( var i = 0; i < split.length; i++) {
  if(split[i] === split[i].toUpperCase()){
    newArray.push(split[i].charCodeAt(0) - 64)
  } else if(split[i] === split[i].toLowerCase()){
    newArray.push(split[i].charCodeAt(0) - 96)
  }
  }
  var converted = newArray.filter(function(a){return a > 0 && a !== 31})
  return converted.toString().replace(/,/g , " ")
}
alphabetPosition("The sunset sets at twelve o' clock.")

//Best Practice
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

//Most Clever
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');