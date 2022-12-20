

console.log(`Grade Calculation System :`);
var gradeCalculation = function (marks) {

  if (marks >= 90 && marks <= 100 ) {
    console.log(`Funtastic Marks : ${marks}, Your grade is A+`);
  }else{
    console.log(`Excellent marks is: ${marks}, Your grade is A`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks : ${marks}, Your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good marks : ${marks}, Your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`Mark is ${marks}, Your grade is C, need improvement`);
  }
  if (marks >= 1 && marks <= 34) {
    console.log(
      `Mark is ${marks}, You are fail, please try next time`
    );
  }
  if (marks <= 0 || marks > 100) {
    console.log(`Marks is "${marks}", "Invalid Data"`);
  }


};
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("Eighty");

function string(marks) {
  if (marks =="string") {
    console.log(`Marks is : ${marks} "Invalid Data" `);
  } else {
    
  }
  
}
string("91");

function string(marks) {
  if (typeof marks =="string") {
    console.log(`Marks is :" ${marks}" Invalid Marks `);
  } else {
    
  }
  
}
string("Eighty");
console.log(`-----------------------------------------------`);

var voterElegibility = function (age) {
  var voterAge = age;
  console.log(`Voting Elegibility :`);
  console.log(`age :  ${voterAge}`);
  if (voterAge >= 18 && voterAge <= 120) {
    console.log(`result : You are elegible for vote`);
  }
  if (voterAge <= 0 || voterAge >= 121) {
    console.log(`result : invalid data`);
  }
  if (voterAge < 18 && voterAge >= 1) {
    console.log(`result : Sorry you are not elegible for vote`);
  }
};
voterElegibility(45);
voterElegibility(17);
voterElegibility(8);
voterElegibility(20);
voterElegibility(-10);
voterElegibility(200);
voterElegibility(0);


