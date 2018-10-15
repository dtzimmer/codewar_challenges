function movie(card, ticket, perc) {
  let timesGoingtoMovie = 0;
  let buySingleTicket = 0;
  let buyCardPass = card;

  while (buyCardPass > buySingleTicket) {
    buyCardPass += ticket * Math.pow(perc, timesGoingtoMovie + 1);
    buySingleTicket += ticket;
    console.log("card", buyCardPass);
    console.log("ticket", buySingleTicket);
    timesGoingtoMovie++;
  }
  return timesGoingtoMovie;
}

console.log(movie(100, 10, 0.95));
