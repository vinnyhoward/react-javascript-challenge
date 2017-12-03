//Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

//My Answer
function longest(s1, s2) {
  var long = s1.concat(s2);
  var tempObj = {}; 
  var j = 1;
  for(i = 0; i < long.length; i++) {
    tempObj[long[i]] = j;
    j++
  }
  var noDups = []
  for(var key in tempObj)
  noDups.push(key)
  return noDups.sort().join('')
  }
  
  longest("aretheyhere", "yestheyarehere")

  //Best Practice
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')