//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  let result,
    num = 0; //initialize variables

  arr = arr.sort(); //sorts the array in ascending order
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    console.log("starting for loop the", [i + 1], "time.");
    //loops over the array
    if (arr[i] === arr[i + 1]) {
      console.log("arrI is:", arr[i], "arrI+1 is:", arr[i + 1]);
      //checks if first item is equal to next item
      num++; //if so, increase the num count by 1
      console.log("num count above", num);
    } else {
      //otherwise
      num++; //increase num count
      console.log("num count below", num);
      if (num % 2 != 0) {
        //if num count divided by 2 has a remainder that does not equal 0
        result = arr[i]; //assign result with the item
        console.log("arrI below", arr[i]);
        break;
      }
    }
  }
  return result;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
