console.log(`Personal Details:`);
const PersonalDetails = {
  name: "Shahaji Lavate",
  mobileNumber: +919766221601,
  EmailId: "shahajilavate431@gmail.com",
  City: "Sangola",
};

PersonalDetails.name = "Shahaji Lavate";
PersonalDetails.mobileNumber = +919766221601;
PersonalDetails.EmailId = "shahajilavate431@gmail.com";
PersonalDetails.City = "Sangola";
console.log(PersonalDetails);

console.log(`======College Details=====`);
const collegeDetails = {
  collegeName: "VMS College Sangola",
  university: "Solapur University",
  graduation: "BCA",
  location: "Sangols",
};

collegeDetails.collegeName = "VMS College Sangola";
collegeDetails.university = "Solapur University";
collegeDetails.graduation = "BCA";
collegeDetails.location = "Sangols";
console.log(collegeDetails);
console.log(`======Merge two object====`);

const Merge = { ...PersonalDetails, ...collegeDetails };
console.log(Merge);

console.log(`===========`);