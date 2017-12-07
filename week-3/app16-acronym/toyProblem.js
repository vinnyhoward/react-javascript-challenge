//Return String of First Characters

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string
// example: 'This Is A Test' will return 'TIAT'

//My Answer
var makeString = (s) => s.match(/\b(\w)/g).join('')

makeString("sees eyes xray yoat")

//Best Practice
const makeString = s => s.split(' ').map(x => x[0]).join('')