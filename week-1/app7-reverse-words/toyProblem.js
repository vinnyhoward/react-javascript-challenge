//Reverse words

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

// Example:
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords("double  spaces"); // returns  "elbuod  secaps"

//My Answer
var reverseWords = (str) => str.split("").reverse().join("").split(" ").reverse().join(" ")

reverseWords('The quick brown fox jumps over the lazy dog.')