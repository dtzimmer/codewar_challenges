//Write a function last that accepts a list and returns the last element in the list.

//If the list is empty:

//In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

//In languages that do not have an empty option, just return null

const last = xs => {
  if (xs.length == 0) {
    return null;
  }
  const last_num = xs.slice(-1);
  return last_num[0];
};

console.log(last([1, 2, 3]));
