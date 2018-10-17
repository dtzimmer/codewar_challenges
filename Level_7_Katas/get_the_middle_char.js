//You are going to be given a word. 
//Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.


function getMiddle(s) {
  let indexChar = s.length % 2 ? true : false; //see if sting is odd(true) or even(false)
  if (indexChar) { //if its length is odd
    return s.charAt(s.length / 2); //return the character at the middle index 
  } else if (!indexChar) { //otherwise if its length is even
    firstChar = s.charAt(s.length / 2 - 1); //the first character to return is the middle minus one
    secondChar = s.charAt(s.length / 2); // the second character is the middle
    return firstChar.concat(secondChar); // return the strings put together
  }
}

console.log(getMiddle("beaner"));
