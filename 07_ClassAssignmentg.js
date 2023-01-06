console.log("====vehical Details====");
class vehicalDetails {
  constructor(Name, Price, Model, SeatingCapacity, Colore) {
    this.Name = Name;
    this.Price = Price;
    this.Model = Model;
    this.SeatingCapacity = SeatingCapacity;
    this.Colore = Colore;
  }
}
let vehicalCar1 = new vehicalDetails(
  " Scorpio",
  "17lakh",
  "Scorpio-N",
  "6-7",
  "Black"
);
let vehicalCar2 = new vehicalDetails(
  "Bolero",
  "12lakh",
  "Bolero B6 opt",
  "7-9",
  "White"
);
let vehicalCar3 = new vehicalDetails(
  "Fortuner",
  "56lakh",
  "GR S 4x4 AT",
  "",
  "5-7",
  "Atttiyude Black"
);
let vehicalCar4 = new vehicalDetails(
  "Dezire",
  "10lakh",
  "Dzire ZXI Plus At",
  "4-5",
  "Sherwood Brown"
);
let vehicalCar5 = new vehicalDetails(
  "Thar",
  "18lakh",
  "LX 4-Str Hard Top Disel At",
  "4-5",
  "Red Rage"
);
console.log(vehicalCar1);
console.log(vehicalCar2);
console.log(vehicalCar3);
console.log(vehicalCar4);
console.log(vehicalCar5);

console.log("====College Details===");
function CollegeDetails(Name, Location, Courses, Universities) {
  this.Name = Name;
  this.Location = Location;
  this.Courses = Courses;
  this.Universities = Universities;
  this.getDetails = function () {
    
    return this.Name + this.Location + this.Courses + this.Universities;
  };
}
var CollegeDetails1= new CollegeDetails(
  "VMS College",
  "Sangola",
  "BCA,BCS,BSC,BA", 
 "Solapur Univercity"
);
var CollegeDetails2= new CollegeDetails(
  "SMS College",
  "Sangola",
  "BCA,BCS,BSC,BA",
  "Solapur Univercity"
);
var CollegeDetails3= new CollegeDetails(
  "KBP College",
  "Pandharpur",
  "B.Com,M.Com,MA",
  "Solapur Univercity"
);
var CollegeDetails4 = new CollegeDetails(
  "Fabtech College",
  "Sangola",
  "CE,CSE,ETE",
  "Solapur Univercity"
);
console.log(CollegeDetails1.getDetails());
console.log(CollegeDetails2.getDetails());
console.log(CollegeDetails3.getDetails());
console.log(CollegeDetails4.getDetails());
console.log(`========Travers Object with one argument=======`);
const Details1 = {Name:"VMS College", Location: "Sangola", Courses:"BCA,BCS,BSC,BA",  Universities:"Solapur Univercity"}
for (const College in Details1 ) {
 console.log(`${College} = ${Details1 [College]}`);
    
  }
  console.log(`-----------------------------------------------`);
  const Details4 = {Name:"Fabtech College", Location:"Sangola",Courses:
  "CE,CSE,ETE",  Universities: "Solapur Univercity"}
  for (const College in Details4 ) {
   console.log(`${College} = ${Details4 [College]}`);
      
    }
    
    
   
    console.log(`-----------------------------------------------`);
  
    const Details3 = {Name: "KBP College", Location: "Pandharpur",Courses: "B.Com,M.Com,MA",  Universities:  "Solapur Univercity"}
    for (const College in Details3 ) {
     console.log(`${College} = ${Details3 [College]}`);
        
      }
      console.log(`-----------------------------------------------`);
  const Details2 = {Name: "SMS College", Location:"Sangola",Courses:"BCA,BCS,BSC,BA",  Universities:"Solapur Univercity"}
  for (const College in Details2 ) {
   console.log(`${College} = ${Details2 [College]}`);
      
    }
    console.log(`-----------------------------------------------`);
     
     
    
  
  
  