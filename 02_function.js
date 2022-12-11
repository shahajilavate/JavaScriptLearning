function display() {
  console.log("my name is shahaji");
  console.log("my sir name is: Gajanan");
}

display(); //functioncalln or function ivvocation
//writ to function show wich shoud log you college name
function showDetails(myName) {
  console.log(myName);
}
showDetails("shahaji lavate");
function raju(paisa, bag, mobaile) {
  console.log(paisa);
  console.log(bag);
  console.log(mobaile);
}
function swapvalues(value1, value2) {
  console.log("before swap", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("Aefore swap", value1, value2);
}

swapvalues(100, 200);
swapvalues(2, 4);
swapvalues("kishor", "hitesh");
swapvalues("you", " me");
