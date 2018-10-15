//Given a string of words, you need to find the highest scoring word.

//Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

//You need to return the highest scoring word as a string.

//If two words score the same, return the word that appears earliest in the original string.

//All letters will be lowercase and all inputs will be valid.

function high(x){
    if(x.length = 0) {
    return null
    } else {
    let totalArray = []
    let combinedValueArray = []
    let splitPhrase = x.split(' ')
    for(let i = 0; i <splitPhrase.length; i++){
        splitLetters = splitPhrase[i].split('')
        for(let y = 0; y< splitLetters.length; y++){
            combinedValueArray.push(splitLetters[y].charCodeAt()-96)
        }
        totalArray.push(combinedValueArray.reduce((a, b) => a+b))
        combinedValueArray.length = 0
    }
    theHighestnum = Math.max(...totalArray)
    indexOfHighestValue = totalArray.indexOf(theHighestnum)
    return splitPhrase[indexOfHighestValue]
    }
}

console.log(high('zzzz the darkness awaits you zzz'))

