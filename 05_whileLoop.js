console.log(`=======while loop=====`);
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log(`---------------------`);
var i = 7;
while (i <= 70) {
  console.log(i);
  i = i + 7;
}
console.log(`========Do while======`);

var index = 0;
do {
  console.log(index);
  index++;
} while (index <= 10);

console.log(`========Do while======`);
var index = 70;
do {
  console.log(index);
  index = index - 7;
} while (index >= 7);

console.log(`=====Infinite Loop====`);

while(true){
    console.log("hello");
}