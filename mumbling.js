//This time no story, no theory. The examples below 
//show you how to write function accum:

//Examples:
//accum("abcd");    // "A-Bb-Ccc-Dddd"
//accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(s) {
    let combined_characters = []
    let characters_capitalized_correctly = []
    for(let i =0; i <= s.length-1; i++){ //this loop if for repeating the characters
        combined_characters.push(s.charAt(i).repeat(i+1))
    }
    for(let p=0; p < combined_characters.length; p++){ //this loop is for capitalizing the first character and lowercasing the rest
        characters_capitalized_correctly.push(combined_characters[p].charAt(0).toUpperCase() + combined_characters[p].slice(1).toLowerCase())
    }
    let finalString = characters_capitalized_correctly.join('-') //join the array as a string a insert a '-' between each set of repeated characters
    return finalString
}

accum('SdjviDIeljZ')

//Someone else's solution - Top Solution on Codewars

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }