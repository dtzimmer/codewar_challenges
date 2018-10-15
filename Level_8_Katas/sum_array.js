//Use the reduce method to sum an array of numbers

let array1 = [1, 2, 3, 4, 5]

function sumArray(array){
   return array.reduce(( accumulator, currentValue ) => accumulator + currentValue);
}

//A+C = New Current Value
//1+0 = 1
//2+1 = 3
//3+3 = 6
//4+6 = 10
//5+10 = 15

value = sumArray(array1)

console.log(value)