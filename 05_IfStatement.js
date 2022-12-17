console.log(`====Eligible for Voting ====`);
var age = 45;
if (age < 120) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age})you are not eligible for the voting`);
}
var age = 17;
if (age < 120) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age})_you are not eligible for the voting`);
}
var age = 8;
if (age < 120) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age})_you are not eligible for the voting`);
}

var age = 20;
if (age < 120) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age})_you are not eligible for the voting`);
}
var age = -10;
if (((age = 0), (age = -10), age > 120)) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age}) = "This in Valid Data."`);
}
var age = 200;
if (age < 120) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age}) = "This in Valid Data."`);
}
var age = 0;
if (((age = 0), age > 120)) {
  console.log(`Age : (${age}) = You are the eligible for the voting.`);
} else {
  console.log(`Age : (${age}) = "In Valid Data."`);
}
console.log(`-----------------------------------------------`);
console.log(`====If Block With Function====`);

GradeCalculation = function (marks) {
  if (marks >= 90) {
    var marks = 98;
    console.log(`A.Funtastic marks : ${marks} Your grade is A+.`);
  } else {
    console.log(`A.Funtastic marks : ${marks}, Your grade is A+.`);
  }
};
GradeCalculation(98);
GradeCalculation = function (marks) {
  if (marks >= 70 && marks <= 90) {
    var marks = 80;
    console.log(`B.Excellent marks : ${marks} Your grade is A+.`);
  } else {
    console.log(`B.Funtastic marks : ${marks}, Your grade is A+.`);
  }
};
GradeCalculation(80);
GradeCalculation = function (marks) {
  if (marks >= 50 && marks <= 75) {
    var marks = 80;
    console.log(`Excellent marks : ${marks} Your grade is A+.`);
  } else {
    console.log(`C.Good marks : ${marks} Your grade is A+.`);
  }
};
GradeCalculation(90);
GradeCalculation = function (marks) {
  if (marks >= 35 && marks <= 50) {
    var marks = 0;
    console.log(`D. ${marks} Your grade is c`);
  } else {
    console.log(`D.Marks is : ${marks},"This in Valid Data",`);
  }
};
GradeCalculation(0);
GradeCalculation = function (marks) {
  if (marks > 100) {
    var marks = 0;
    var marks = 0;

    var marks = 150;
    console.log(`E.Marks is : ${marks} Please provide valid marks.`);
  } else {
    console.log(` ${marks}Please provide valid marks.`);
  }
};
GradeCalculation(150);
GradeCalculation = function (marks) {
  if (marks >= 35 && marks <= 50) {
    var marks = -7;
    console.log(`Marks is ${marks} Your grade is c`);
  } else {
    console.log(`Marks is : ${marks} Please provide valid marks`);
  }
};

GradeCalculation(-7);

GradeCalculation = function (marks) {
  if (marks >= 35 && marks <= 50) {
    var marks = 35;
    console.log(`Marks is : ${marks} Your grade is c+ Need improvement.`);
  } else {
    console.log(`.Marks is : ${marks},Your grade is C+ Need improvement.`);
  }
};
GradeCalculation(35);

GradeCalculation = function (marks) {
  if (marks > 30) {
    var marks = 29;
    console.log(`Marks:${marks} Result : Pass`);
  } else {
    console.log(`Marks is : ${marks} Result is : Fail`);
  }
};
GradeCalculation(29);
GradeCalculation = function (marks) {
  if (marks > 50) {
    var marks = 64;
    console.log(`Marks is : ${marks} Your grade is B+`);
  } else {
    console.log(`Marks is : ${marks} Your grade is C+`);
  }
};
GradeCalculation(64);
GradeCalculation = function (marks) {
  if (marks > 50) {
    var marks = 49;
    console.log(`Marks is : ${marks} Your grade is B+`);
  } else {
    console.log(`Marks is : ${marks} Your grade is C+ Need improvement.`);
  }
};
GradeCalculation(49);
console.log(`------------------------------------------------`);
