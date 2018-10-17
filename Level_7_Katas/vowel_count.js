//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, and u as vowels for this Kata.

//The input string will only consist of lower case letters and/or spaces.

getCount = str => {
  vowelArray = str
    .split("") //split the string up into individual characters
    .filter(
      //filter over every item in an array
      letter =>
        (letter === "a") | //if letter equals any of the vowels
        (letter === "e") |
        (letter === "i") |
        (letter === "o") |
        (letter === "u")
    );
  return vowelArray.length; //return the length of the array
};

console.log(getCount("pear tree"));
