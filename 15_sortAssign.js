console.log(`Assignment.A : Sorting in Ascending / Descending order and reverse.`);
console.log(`---------------------------------------------------------------------`);

const array_rool_numbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array : ${array_rool_numbers }`);
console.log(`---------------------------------------------------------------------`);


console.log(`1].Reverse the array.`);
array_rool_numbers.reverse();
console.log(array_rool_numbers);
console.log(`---------------------------------------------------------------------`);


console.log(`2].Use the sort() method as is  without any custom sorting logic.`);
array_rool_numbers.sort()
console.log(array_rool_numbers);
console.log(`---------------------------------------------------------------------`);

console.log(`3].Sort the array in ascending order by writing custom logic.`);
array_rool_numbers.sort((a, b)=>{
    return a>b ? 1 : -1;
 });
 console.log(array_rool_numbers);
 console.log(`---------------------------------------------------------------------`);
 console.log(`4].Find the greatest number in arry.`);
const max = Math.max(...array_rool_numbers)
console.log(array_rool_numbers);
console.log(`The greatest number from the array is :`,max);
console.log(`---------------------------------------------------------------------`);

console.log(`5].Find smallest number in array.`);
const min = Math.min (...array_rool_numbers)
console.log(array_rool_numbers);
console.log(`The smallest number from the array is :`,min);
console.log(`---------------------------------------------------------------------`);

console.log(`6].Remove duplicate number from the array`);
let duplicateNumbers = [...new Set(array_rool_numbers)]
console.log(`Before : ${array_rool_numbers}`,);
console.log(`After :`,duplicateNumbers);
console.log(`---------------------------------------------------------------------`);