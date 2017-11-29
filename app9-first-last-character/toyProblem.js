//Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a 
// string. You're given one parameter, except in C, where, to keep the difficulty at the level of the kata, you are given 
// parameters, the first a buffer with length exactly the same as the second parameter, the original string. You don't 
// have to worry with strings with less than two characters.

//My answer
function removeChar(str){
  var newString = str.split('')
  var splitEnd = newString.pop()
  var splitFirst = newString.shift()
return newString.join('')
}

removeChar('eloquent')

//Best Practice
function removeChar(str) {
  return str.slice(1, -1);
}



// Remove First and Last Character Part Two

// This is a spin off of my first Kata, you are given a list of characters as a comma separated string. Write a function to return a string containing all except the first and last characters, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return null value.

// Arrays are joined by adding a single space between each consecutive array element.

//My Answer
function array(arr){
  var newString = arr.split(',')
  if(newString.length <= 2) {
    return null
  } else {
var splitEnd = newString.pop()
var splitFirst = newString.shift()
return newString.join(' ')
}
}

//Best Practice
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}