console.log(`1)."I AM Learning JavaScript, The Language of internet" `);
var sentence = "I AM Learning JavaScript, The Language of internet";
sentence.length;
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charCopy = char.toLowerCase();
  
  if (char == "a" || char == "A") {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total number characters of 'a' or 'A' in string is : ${counter}`);
console.log(`-----------------------------------------------------`);
console.log(`2)."My favourite movie is LAggAn"`);
var sentence = "My favourite movie is LAggAn";
sentence.length;
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charCopy = char.toLowerCase();
  if (char == "a" || char == "A") {
    console.log(char);
    counter = counter + 1;
  }
}

console.log(`Total number characters of 'a' or 'A' in string is : ${counter}`);
console.log(`------------------------------------------------------`);
