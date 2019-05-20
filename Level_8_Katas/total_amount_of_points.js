// Create a function that calculates a score based on these conditions
// Take 'a:b'
// if a > b increase score by 3
// if a = b increase score by 1
// if a < b increase score by 0

function points(games) {
  let total = 0;
  // scores = games.map(game => console.log(game[0], game[1], game[2]));
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

console.log(points(["0:1", "3:2"]));
