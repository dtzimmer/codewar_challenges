//Function that calculates the least amount of coins from any amount of change

function looseChange(cents) {
  let a = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }; //initialize the object
  if (cents <= 0) return a; //if it's a negative amount, return
  a.Quarters = Math.floor(cents / 25); //start by dividing 25 (quarter) into the amount
  a.Dimes = Math.floor((cents % 25) / 10); // remainder of dividing 25, and then trying 10 (dime)
  a.Nickels = Math.floor(((cents % 25) % 10) / 5); //remainder of dividing 25 AND 10, then trying 5 (nickel)
  a.Pennies = Math.floor(((cents % 25) % 10) % 5); // remainder of dividing 25, 10, and 5, should result in pennies < 5
  return a; // return the object filled out with coin amounts
}

console.log(looseChange(192));
