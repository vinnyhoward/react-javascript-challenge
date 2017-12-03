// Be Concise I - The Ternary Operator

// You are given a function describeAge that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Whatever you do, do not change what the function does. Good luck :)

function describeAge(age) {
let r = age <= 12 ? "kid" 
: age >= 13 && age <= 17 ? "teenager" 
: age >= 18 && age <= 64 ? "adult"
: "elderly" 
return "You're a(n)" + r
}

//My version
function describeAge(age){
let r=age<=12?"kid":age>=13&&age<=17?"teenager":age>=18&&age<=64?"adult":"elderly" 
return"You're a(n) "+r
}

//Best Practice
function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}

//Most Clever
describeAge=a=>
`You're a(n) ${a
<13?'kid':a<18?
'teenager':a<65?
'adult':'elderly'}`