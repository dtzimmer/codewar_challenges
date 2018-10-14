//Own created challenge: 
//Given a letter (x) determine if the letter is 
//capitalized (return true) or not (return false)

function isCapitalLetter (x){
   return x === x.toUpperCase() ? true : false
}

let answer = isCapitalLetter('C')
console.log(answer)