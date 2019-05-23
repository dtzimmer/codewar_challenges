//Instructions: Find only even numbers of the array and return only
// the "number" of numbers from the end of that array

//First solution - messy...

// function evenNumbers(array, number) {
//   let newArray = [];
//   array.map(num => {
//     if (num % 2 === 0) {
//       newArray.push(num);
//     }
//   });
//   return newArray.slice(newArray.length - number);
// }

//Second solution - much better. I know there's a better way to refactor

function evenNumbers(array, number) {
  const newArray = array.filter(num => !(num % 2));
  return newArray.slice(newArray.length - number);
}

console.log("FINALE", evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));

//[-8, 26];
