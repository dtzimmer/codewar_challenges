function rentalCarCost(d) {
    let cost = d * 40
    console.log(d)
    if(d >= 7) {
      discount = cost - 50
    } else if ( d >= 3) {
      discount = cost - 20
    } else if (d < 3) {
      discount = cost - 0
    }
    console.log(discount)
    return discount
  }
 

  rentalCarCost(7)