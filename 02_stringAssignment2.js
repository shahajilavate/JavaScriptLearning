console.log("02_StringTemplateAssignment.js");
console.log("---------------------------------------------------------------------------");
var greet = "    Hey you are doing good, Keep it up   ";

 console.log("1)_Given a String :",greet);

 console.log("2)_Length of String is:", greet.length);

 var resultTrim = greet.trim();
 console.log( "3)_ Removeing extra spacees:", resultTrim);

 var greet = 'Hey you are doing good, Keep it up';
  var extspeces =resultTrim.length;
 console.log("4)_After removeing Extra speces:",extspeces);

   

var greet = "Hey you are doing good, Keep it up";
console.log("5)_First character:",greet.charAt(0),"      Last character:", greet.charAt(33));


var greet = "Hey you are doing good, Keep it up";
var wordsinsentence = greet.split(" ");
console.log("6)_Total words avilable in the string:",wordsinsentence.length);

var greet = "Hey you are doing good, Keep it up";
console.log('7)_index of word "Good" is:', greet.indexOf("good"));
 
var greet = "Hey you are doing good, Keep it up";
console.log("8)_With substring()method:", greet.substring(22));
console.log("  _With slice() method:", greet.slice(22));

var greet = "Hey you are doing good, Keep it up";
console.log('9)_Check string ends with word "up" is:', greet.includes("up") );

var greet = "Hey you are doing good, Keep it up";
console.log('10)_Check string start with word "Hey" is:', greet.includes("Hey") );

console.log("---------------------------------------------------------------------------");

