function XO(str) {
  let split = str.split("");
  filterXs = split.filter(letter => letter === "x" || letter === "X");
  filterOs = split.filter(letter => letter === "o" || letter === "O");
  return filterXs.length === filterOs.length ? true : false;
}

console.log(XO("xxOo"));
