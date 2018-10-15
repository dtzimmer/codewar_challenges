//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

//Using a for loop and 
function positiveSum(arr) {
    let positiveNums = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positiveNums.push(arr[i])
     }
    }
    return positiveNums.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0);
  }

//Using the filter and reduce method____________________________________________________________

  function positiveSum(arr) {
    const positiveNums = arr.filter(num => num > 0)
    return positiveNums.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0);
  }

//Using a for loop and adding to a total__________________________________________________
  function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }