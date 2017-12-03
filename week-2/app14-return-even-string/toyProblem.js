//Return a string's even characters.
// Write a function that removes all the even characters from a string and returns them in an array. If the string is smaller than two characters and longer than 100 characters, the function should return "invalid string".

// For example:

// function evenChars("abcdefghijklm") {}
// // should return ["b", "d", "f", "h", "j", "l"]

// function evenChars("a")
// should return "invalid string"

//My Answer
function evenChars(string) {
  var splitStr = string.split('')
  var newStringArr = []
  if(string.length < 2 || string.length > 100) {
    return "invalid string"
  } else {
  for(var i = 0; i < splitStr.length; i++) {
    if(i % 2 !== 0) {
      newStringArr.push(splitStr[i])
    }
  }
  }
  return newStringArr
  }
  evenChars ("abcdefghijklm")

  //Best Practice
  function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" : 
    [...string].filter((x, i) => i % 2);
  }