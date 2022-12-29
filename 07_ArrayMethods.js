let arrayOfNum = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayOfNum);
console.log(`1] Total Elements or Length :`,arrayOfNum.length);

let ElenetAtZeroIndex = arrayOfNum[0];
console.log(`2] First Element : ${ElenetAtZeroIndex}`);
console.log(`   Last Element: ${arrayOfNum[10]}`);
console.log(`3] Third last Element:${arrayOfNum[8]}`);

const nums = [20,31,40,25,23,11,29,9,60,2,11];
const Even = nums.filter(Number =>{
    return Number % 2 ==0;
});
console.log(`4] Even Number : `,Even);


const arr = [20,31,40,25,23,11,29,9,60,2,11];
const odds = arr.filter(Number =>{
    return Number % 2 !==0;
});
console.log(`5] Odd Number : `,odds);


