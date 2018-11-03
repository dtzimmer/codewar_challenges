//Simple, remove the spaces from the string, then return the resultant string.

//using regex***************
function noSpace(x) {
  return x.replace(/ /g, "");
}

//using methods*************
function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

//.replace(/ /g,'')
//The g character means to repeat the search through the entire string. Read about this, and other RegEx modifiers available in JavaScript here.
