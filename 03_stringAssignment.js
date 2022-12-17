console.log("===========SquareOfWordLenth========");
console.log("");
var squareOfWordLenth ="JavaScript";
console.log('The length of "JavaScript" word:',squareOfWordLenth.length);

var squareOfWordLenth = function (length) {
    console.log('Square of the "JavaScript" word is:', length * length);
  };
squareOfWordLenth(10)
console.log("");

var squareOfWordLenth ="Google Chrome";
console.log('The length of "Google Chrome" word:',squareOfWordLenth.length);
var squareOfWordLenth = function (length) {
    console.log('Square of the "Google Crome" word is:', length * length);
  };
  squareOfWordLenth(13)
  console.log("");

var squareOfWordLenth ="Developer Smart";
console.log('The length of "Developer smart" word:',squareOfWordLenth.length);
var squareOfWordLenth = function (length) {
    console.log('Square of the "Developer Smart" word is:', length * length);
  };
  squareOfWordLenth(15)
  console.log("");

console.log("===Function Expresstion with no arg and no return value ===");
console.log();
console.log("");
var string = function(){ //Function Expresstion with no arg and no return value
    var str = "I am Angular Developer";
    console.log("Given String is:",str);
    var strLength = str.length;
    console.log(`Length of given string is: ${strLength}`);
    var splitStr = str.split(" ");
    var wordStrLength = splitStr.length;
    console.log(`Total Words in given string are: ${wordStrLength}`);
    var devideStr = strLength / wordStrLength;
    console.log(`Deviding length by total words: ${devideStr}`);
    var multString = strLength * wordStrLength;
    console.log(`Multiplying string length with total words: ${multString}`);
}
string();

console.log("=============================================================");