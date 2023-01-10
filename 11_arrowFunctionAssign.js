console.log(`1.log the message on console inside arrow function`);
function hello() {
  console.log("Good morning,today is Monday");
}
hello();
console.log(
  `----------------------------------------------------------------------------------------------------`
);
console.log(
  `2.With 3 args and no return value, of received 3 parameter perform the multiplication`
);

let multiply = (n1, n2, n3) => {
  let mul = n1 * n2 * n3;
  return mul;
};
let mulResult = multiply(5, 5, 2);
console.log(`Multiplication of 5,5,2 is =`, mulResult);
let multiply1 = (n1, n2, n3) => {
  let mul = n1 * n2 * n3;
  return mul;
};
let mulResult1 = multiply1(10, 4, 1);
console.log(`Multiplication of 10,4,1 is =`, mulResult1);
console.log(
  `----------------------------------------------------------------------------------------------------`
);
console.log(
  `3.with 5 args and return value such as, for received  params it should do the additon`
);

let additon = (n1, n2, n3, n4, n5) => {
  let add = n1 + n2 + n3 + n4 + n5;
  return add;
};
let addResult = additon(100, 100, 200, 349, 756);
console.log(`Additon of 100,100,200,,349,756 is =`, addResult);

let additon1 = (n1, n2, n3, n4, n5) => {
  let add1 = n1 + n2 + n3 + n4 + n5;
  return add1;
};
let add1Result = additon1("I am", "Learning", "EC6", "Features", "in depth");
console.log(
  `Additon of "I am","Learning","EC6",'Features', "in depth" is =`,
  add1Result
);
console.log(
  `----------------------------------------------------------------------------------------------------`
);
