// Polish Alphabet
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

// Example:

// Input: "Jędrzej Błądziński"
// Output: "Jedrzej Bladzinski"

function correctPolishLetters (string) {
  var str = string.replace("ą", "a" ).replace("ć", "c" ).replace("ę", "e" )
  .replace("ł", "l" ).replace("ń", "n" ).replace("ó", "o" ).replace("ś", "s" )
  .replace("ź", "z" ).replace("ż", "z" )
  return str
  }
  
  correctPolishLetters('Jędrzej Błądziński')
  
  