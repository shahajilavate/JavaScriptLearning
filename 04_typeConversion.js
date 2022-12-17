var numadd = 10 + 40;
var strAdd = "pooja" + 70;
console.log((`strAddis: ${strAdd}`));
console.log(`+ operator can do the type conversionas well from string to number`);
var numstr ="100";
var  num = + numstr;//Explicit conversion
console.log(`typeof numstr is: ${typeof numstr}`);
console.log(`type of num is: ${typeof num}`);

var numstr ="chandra";
var  num = + numstr;
console.log(`typeof ${numstr} is: ${typeof numstr}`);
console.log(`type of ${num} is: ${typeof num}`);

console.log(`==comparsion ${20=="20"}`);  //Implicit conversion

var mynum=77.333;
console.log(`mynum values ${mynum} and its tpe is: ${typeof num}`);
mynum.toString();
var strmynum =mynum.toString();
console.log(`strmynum values ${strmynum} and its type is: ${typeof strmynum}`);