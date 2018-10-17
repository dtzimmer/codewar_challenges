//LEVEL 7
//My friend John likes to go to the cinema. He can choose between system A and system B.

//System A : buy a ticket (15 dollars) every time
//System B : buy a card (500 dollars) and every time 
//    buy a ticket the price of which is 0.90 times the price he paid for the previous one.


function movie(card, ticket, perc) {

    let ticketNormal = 0;
    let ticketSpecial = card;
    let counter = 0;

    while (ticketNormal <= Math.ceil(ticketSpecial) ){

        counter++;
        ticketNormal += ticket;
        ticketSpecial += (ticket * (Math.pow(perc, counter)));

    }

    return counter;
}