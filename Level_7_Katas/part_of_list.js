function partlist(arr) {
  let newArray;
  let returnArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray = [];
    newArray.push(arr.slice(0, i).join(" "));
    console.log(newArray);
    newArray.push(arr.slice(i).join(" "));
    console.log(newArray);
    returnArray.push(newArray);
  }

  return returnArray;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
