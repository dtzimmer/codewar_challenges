function number9(n) {
  let List = [];
  for (let i = 0; i < n; i++) {
    List.push(i);
  }
  return List.toString()
    .split("")
    .filter(num => num === "9").length;
}

console.log(number9(100));
