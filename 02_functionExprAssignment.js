console.log("02_FunctionExpAssignment.js");
console.log("----------------------------------------------");
console.log("1_Function Exprestion To Get Square Of Number:");

var square = function (num1) {
  console.log("Square of =", num1, "=", num1 * num1);
};
var square = function (num2) {
  console.log("Square of =", num2, "=", num2 * num2);
};
var square = function (num3) {
  console.log("Square of =", num4, "=", num3 * num3);
};
var square = function (num4) {
  console.log("Square of =", num4, "=", num4 * num4);
};

square(5);
square(6);
square(25);
square(100);
console.log("----------------------------------------------");

console.log("2_Type Of square is:", typeof square);
console.log("----------------------------------------------");

var areaofrectangel = function (length, width) {
  console.log("3_Area of rectangle =", length * width);
  var result = length * width;
};
areaofrectangel(499, 917, "Sq.Units");

console.log("----------------------------------------------");
console.log("4_SwapValues:");
function swapvalues(value1, value2) {
  console.log("Before swap=", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swap=", value1, value2);
}
swapvalues("Virat", "Anushka");
swapvalues(1000, 2000);
console.log("----------------------------------------------");
console.log("5_String");
var StringIs = "JS the most popular language";
console.log("String:", StringIs);
console.log("Total character in the string is=", StringIs.length);
console.log("character at index 6 = " , StringIs.charAt(6));
var lenghttotal = StringIs.length;
console.log("character at index 11 =", StringIs.charAt(11));
var lenghttotal = StringIs.length;
console.log("The Last Character index is=", StringIs.charAt(lenghttotal - 1));
console.log("The First character index is=", StringIs.charAt(0));

var square = function (num) {
  console.log("Square Of Lenght Given String Is=", num * num);
};
square(28);
console.log("----------------------------------------------");