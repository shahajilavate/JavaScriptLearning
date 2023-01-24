const array = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Array Numbers`,array);
console.log(`---------------------------------------------------------------------------------------------------------------`);

console.log(`1.Log the array element with it's index foreach() with arrow function`);

array.forEach( (currentValue,index )=>{
   
    console.log(`Value is :`,currentValue,`and its index is : `,index);
} );
console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`2.Find the Positive numbers, using forEach() with arrow function`);
array.forEach(element => {
    if (element > 0) {
        console.log(element);
      
    }
 });
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`3.Find the Negative numbers, add into new array and & log new array using array function`);
array.forEach(element => {
    if (element < 0) {
        console.log(element);
    }
 });
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`4.Find even numbers, Using forEach() with arrow function `);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
        array.push(currentValue);
      console.log(currentValue);
    }
});
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`5.Find sum of all element from array_numbers and log on sum value`);
const array1 = [1,-7,40,502,-77,91,0,108,89,-601];
var sum=0;
array1.forEach((element)=>{
    sum+=element;
})
console.log(`sum of all the values in the array =`,sum);

console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`6.log the only even positioned array value on  console.forEach() with arrow function prefered`);
array.forEach( (currentValue,index) => {
    if(index%2==0) {
        array.push(index,currentValue);
      console.log(`Index is :`,index,`Value is : `,currentValue);
    }
});

console.log(`---------------------------------------------------------------------------------------------------------------`);