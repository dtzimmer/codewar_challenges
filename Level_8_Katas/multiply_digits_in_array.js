//Given a non-empty array of integers, return the result of 
//multiplying the values together in order. 
//Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let x = [1, 1, 1, 3, 4, 5, 0]

function grow(x){
    const sum = x.reduce((total, amount) => total * amount); 
    return sum;
  }

  console.log(grow(x))