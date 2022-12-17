console.log(`====Greatest Number Amongst two number====`);
var greatest = function (num1,num2) {
var result = (num1>num2) ? `The greatest number among "${num1}" And "${num2}" is" ${num1}.`
: `The greatest number among "${num1}" And "${num2}" is "${num2}.`;
console.log(result);
}
greatest(10,-10);
greatest(800,899);
console.log(`------------------------------------------------------`);

console.log(`======Even or Odd=====`);

var EvenorOdd = function (num1) {
    var newResult = num1%2==0 ? `The number ${num1} is EVEN Number.` : `The number ${num1} is ODD Number.`;
    console.log(newResult); 
}
EvenorOdd(29);
EvenorOdd(44);
EvenorOdd(0);
EvenorOdd(101);
console.log(`------------------------------------------------------`);

console.log(`=====Length Words====`);

var EvenorOddLength = function (value) {
var res = value.length%2==0 ? `The length of word "${value}" is EVEN.`: `The length of word ""${value}" is ODD.`;
console.log(res);
    
}
EvenorOddLength("JavaScript");
EvenorOddLength("Developer");
EvenorOddLength("Google");
console.log(`------------------------------------------------------`);