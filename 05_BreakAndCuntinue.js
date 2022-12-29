var index = 0;
while (index <= 10) {
  console.log(index);
  if (index == 5) {
    break;
  }
  index++;
}

console.log(`=====Using Break Statement example====`);
for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index>=12) {
        break;
    }
    
}
var index = 0;
while (index <= 10) {
  console.log(index);
  if (index == 5) {
    index++;
    continue;
  }
  index++;
}