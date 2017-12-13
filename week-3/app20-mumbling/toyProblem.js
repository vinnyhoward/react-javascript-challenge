// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My Answer
let accum = s => {
  let splitStr = s.split('')
  let addOn = 2;
  let newCharArray = []
  for(var i = 0; i < splitStr.length; i++){
    newCharArray.push(Array(addOn).join(splitStr[i]).toLowerCase().split('').join(''))
    addOn++
  }
  newCharArray = newCharArray.map(function(str){
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/ -/, ':');
  });
  return newCharArray.join('-')
  }
  
  accum("ZpglnRxqenU")

  //Best Practice / Clever
  function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
  }