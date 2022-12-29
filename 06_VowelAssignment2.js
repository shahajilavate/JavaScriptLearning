let strTotal = function (str) {
    console.log(`1] String is: "${str}"`);
    let counter = 0;
    for (let index = 0; index < str.length; index++) {
      let char = str.charAt(index);
      let charCopy = char.toLowerCase();
      if (
        charCopy == "a" ||
        charCopy == "e" ||
        charCopy == "i" ||
        charCopy == "o" ||
        charCopy == "u"
      ) {
        counter = counter + 1;
      }
    }
    return counter;
  };
  let strCount = strTotal("I am very good IT Developer");
  console.log(`Total no of vowels : ${strCount}`);
  console.log(`---------------------------------------------------`);
  console.log(
    `2] Sum of cube number:`
  );
  function sumOfCube() {
    let cube = 0;
    for (let index = 1; index <= 5; index++) {
      cube += index * index * index;
    }
    console.log(` 1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 + 5*5*5 = ${cube}`);
  }
  sumOfCube();
  console.log(`----------------------------------------------------`);
  console.log(`3] Odd position char without space: `);
  function oddPositionedChars(nameOfString) {
    console.log(`String  is : ${nameOfString}`);
    var stringConcate = " ";
    var splitString = nameOfString.split(" ").join("");
    for (let index = 1; index < splitString.length; index = index + 2) {
      var char = splitString.charAt(index);
      stringConcate += char;
    }
    console.log(`Odd positioned characters :  ${stringConcate}`);
  }
  oddPositionedChars(`"Hard work always pays back"`);
 
  function oddPositionedChars(nameOfString) {
    console.log(`String  is : ${nameOfString}`);
    var stringConcate = "";
    var splitString = nameOfString.split(" ").join(" ");
    for (let index = 1; index < splitString.length; index = index + 2) {
      var char = splitString.charAt(index);
      stringConcate += char;
    }
    console.log(`Odd positioned characters  :  ${stringConcate}`);
  }
  
  oddPositionedChars(`"Soon I will be Angular IT Champ"`)

//   function oddpositionconchar(str) {
//     console.log(`Given string is---${str}`);
//     var result = "";
//     for (let i = 0; i < str.length; i++){
//         if (i % 2 == 1) {
//             oddchar = str.charAt(i);
//             result = result.concat(oddchar);
//             result = result.split(" ").join(" ");

//         }
//     }console.log(`Odd positioned characters are -${result}`);
   
//   }
//   oddPositionedChars("Soon I will be Angular IT Champ")
  console.log(`----------------------------------------------------`);
  console.log(`4] Factorial of numbers:`);
  var factorialNumber = function (num) {
    result = 1;
    for (let i = num; i >=1; i--) {
       result = result *i;

    } console.log(`Factorial of ${num} = ${result}`);
  }
  factorialNumber(5);
  factorialNumber(7);
  factorialNumber(8);
  factorialNumber(12);
  console.log(`---------------------------------------------------`);