//Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//My Answer
function findOutlier(integers){
  var evenNum = []
  var oddNum = []
  for(var i = 0; i < integers.length; i++) {
    if( integers[i] % 2 !== 0 ) {
      oddNum.push(integers[i])
    }
  }
  for(var j = 0; j < integers.length; j++) {
    if( integers[j] % 2 === 0 ) {
      evenNum.push(integers[j])
    }
  }
  if ( evenNum.length < oddNum.length) {
    return evenNum[0]
  } else {
    return oddNum[0]
  }
}

//Best Practice
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}