console.log("======== concat() ==========");
var firstName = "Mohit ";
var lastName = "Sharma";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Ravesh " ,lastName);
console.log("Concatenation using concat(): ", result);
console.log("____________________________________________________________________________________");

console.log( greet("Mor", "Eve"));

console.log("To upper case", greet.toUpperCase());
console.log("To lower case", greet.toLowerCase());

var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

console.log("Include() ",greet.includes("Good"));

var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log("Slice method", resultSlice);

console.log( "slice() with start index ",greet.slice(4));