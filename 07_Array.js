
// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);


console.log(`======== push() methods=========`);
let arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3);
arrayOfNum.push(11,22,33);
console.log(arrayOfNum);

console.log(`======== unshift() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum1);
arrayOfNum1.unshift(77);
arrayOfNum1.unshift(99, 111, 333);
console.log(arrayOfNum1);

console.log(`======== pop() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNum.pop();
console.log(popResult);
console.log(arrayOfNum)

console.log(`======== shift() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift();
console.log(shiftResult);
console.log(arrayOfNum)

console.log(`======== slice() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== splice() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);

console.log("====== Inserting element in the array =======");
var arrayOfNum1= [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);
console.log(arrayOfNum);
arrayOfNum.splice(1, 0, 55, 99, 22);
console.log(arrayOfNum);

console.log("====== Replacing element in the array =======");
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);
console.log(arrayOfNum);
console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum.splice(2, 3, 99, 77 );
console.log(arrayOfNum);

console.log("==========include() ========");
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
let isAvailable =  arrayOfNum.includes(9);
console.log(isAvailable);

console.log(`======== for of loop ==========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {
    console.log(element);
}
console.log(`======== join() ==========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" ");
console.log(joinResult);
console.log(typeof joinResult);

console.log(`======== concat() ==========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);

console.log(`======== Resize an array ==========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);