// Are the numbers in order?

// Are the numbers in order?
// In this Kata, your function receives an array of positive integers as input. Your task is to determine whether the numbers are in ascending order.
// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

// For example:

//my Answer
function inAscOrder(arr) {
var newArray = arr.slice().sort(function(a,b){ return a - b })
for (var i = 0; i < arr.length; i++) {
if(arr[i] !== newArray[i]) {
        return false;
    }
}
return true
}

//Best Practice / Clever
function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}

// SUPERSIZE ME.... or rather, this integer!
// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

//My Answer
function superSize(num){
  var splitNum = num.toString()
  var newNumArr = []
for(var i = 0; i < splitNum.length; i++) {
newNumArr.push(+splitNum.charAt(i))
}
var highest = () => [].slice.call(newNumArr).sort(function(a,b){ 
    return (b - a)
})
var superSized = parseInt(highest().toString().replace(/,/g , ""))
}


//Best Practice
function superSize(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}