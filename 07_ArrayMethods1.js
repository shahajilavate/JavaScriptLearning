const fruits=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`Given array is:`,fruits);


console.log(`========Finding First and Last Element of array=====`);
let ElenetAtZeroIndex = fruits[0];
console.log(`First Element : ${ElenetAtZeroIndex}`);
console.log(`Last Element: ${fruits[4]}`);

console.log(`=====Adding element in the array======`);
fruits.unshift("Papaya");  //unshift() methods
console.log(fruits);

console.log(`=====Removing Element the array=====`);
const fruits12=["Papaya","Banana","Orange","Apple","Mango","WaterMelon"];
delete fruits12[4];
console.log(fruits12);

console.log(`======Insert Element "Pineapple" at last position  =====`);
fruits.push("Pineapple");      //push() methods
console.log(fruits);

console.log(`======Insert " DragoneFruits" before "WaterMelon" =====`);
fruits.splice( 5,-1," DragoneFruits" );
console.log(fruits);


console.log(`====== Replaceing "Orange" "Kiwi"=======`);
let spliceResult1 =fruits.splice(2,-4,"kiwi");
console.log(fruits);

console.log(`========Starting from index 1 to 4=======`);
let spliceResult111 = fruits.splice(1,4); //splice() methods
console.log(spliceResult111);

console.log(`=======Only select last 3 element=========`);
let sliceResult = fruits.slice(3);
let sliceRes = fruits.slice(2, 5);
console.log(sliceRes);
let length = fruits.length;
