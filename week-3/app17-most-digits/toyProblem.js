//Most digits

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

//My Answer
const findLongest = (array) => {
  var biggestNumber = '';
  var newNum = array.toString().split(',')
  for(var i = 0; i< newNum.length; i++){
      if(newNum[i].length > biggestNumber.length){
          biggestNumber = newNum[i];
       }
  }
    return parseInt(biggestNumber);
  }

  //Best Practice
  const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);