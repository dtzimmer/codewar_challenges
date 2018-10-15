//LEVEL 6
//John has invited people. His list is:
//s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//Could you make a program that makes this string uppercase
//gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma. So the result of function meeting(s) will be:
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
//It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  let upperCaseAndSplitNames = s.toUpperCase().split(";"); //upper case every character and split at ;
  let orderedNames = upperCaseAndSplitNames.map(
    name =>
      name
        .split(":") //split the first and last name
        .reverse() //reverse first and last name
        .join(", ") //join them together by a comma and space
  );
  return "(" + orderedNames.sort().join(")(") + ")"; //return the string in a parenthesis, joined by parenthesis, and sorted by last name
}

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);

//BEST SOLUTION (Refactored version of mine)
// function meeting(s) {
//     let string = s.toUpperCase().split(';')
//                   .map(x => x.split(':').reverse().join(', '))
//                   .sort()
//                   .join(')(')
//     return '(' + string + ')'
//   }
