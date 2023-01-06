let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6];
console.log(arrayOfNumbers);
console.log(`=====Total Number of Element avilabale in array====`);
let TotalElement= arrayOfNumbers.length;
console.log(`Total Number of Element avilabale in array---> ${TotalElement}`);
let typeOfArray = typeof arrayOfNumbers;
console.log(`Type of Array- ArrayOfNumbers--> ${typeOfArray}`);

console.log(`======Accessing Array Element======`);

let ElenetAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at zero Index: ${ElenetAtZeroIndex}`);
console.log(`Element at Fofth Index: ${arrayOfNumbers[5]}`);
console.log(`Element at Last Index: ${arrayOfNumbers[6]}`);

arrayOfNumbers[2] = 100;
console.log(arrayOfNumbers);

let indexOf6 = arrayOfNumbers.indexOf(6);
console.log(`index of 6-->${indexOf6}`);

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`index of 6-->${indexOf10}`);

console.log(`traversing array using for loop`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log(`Accessing only even indexex values`);
if (index %2 ==0) {
    const element=arrayOfNumbers[index];
    console.log(element);
}
