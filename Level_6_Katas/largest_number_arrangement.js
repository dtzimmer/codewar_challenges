const largestArrangement = array => {
  return parseInt(
    array
      .sort()
      .reverse()
      .join("")
  );
};

console.log(largestArrangement([8, 6, 590, 70]));
