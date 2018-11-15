function fizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log(i, "FizzBuzz");
    } else if (!(i % 5)) {
      console.log(i, "Buzz");
    } else if (!(i % 3)) {
      console.log(i, "Fizz");
    } else console.log(i);
  }
}

console.log(fizzBuzz(100));

function fizzBuzz(limit) {}
