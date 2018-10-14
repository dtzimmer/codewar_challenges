//Make a function that checks to see if a number or string (x) 
//exists within the array (a).
//If it does, return true, othewise return false.


let a = [ 2, 3, 26]
let x = 2

function check(a,x){
    return a.includes(x)
  };
  

  console.log(check(a, x))
