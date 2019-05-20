function sumMix(x) {
  let total = 0;
  x.map(num => {
    if (typeof num === "string") {
      const conversion = Number(num);
      total += conversion;
    } else if (typeof num === "number") {
      total += num;
    }
  });
  return total;
}

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
