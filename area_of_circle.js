//Write the function for calculating the area of a circle

function areaOfCircle(r) {
    return Math.round((Math.PI * Math.pow(r, 2))*100)/100
}

let area = areaOfCircle(2)

console.log(area)



// (Math.PI * Math.pow(r, 2)).toFixed(2)