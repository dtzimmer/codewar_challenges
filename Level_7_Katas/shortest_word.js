function findShort(s) {
  let wordLengths = s.split(" ").map(word => word.length);
  return Math.min(...wordLengths);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
