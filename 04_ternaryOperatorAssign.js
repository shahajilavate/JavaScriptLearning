console.log(`====Male Marriage Eligibility===`);
var MaleMarriageEligibility = function (gender,age,boyName) {
    var result = (gender=="Male" && age>=21) ? `Hey "${boyName}" you are eligible for marriage.`
    :`Hey "${boyName}" you are not eligible for marriage.`
  console.log(result);
}
MaleMarriageEligibility("Male", 25, "Bill Gates");
MaleMarriageEligibility("Male", 17, "Steve Jobs");
console.log(`----------------------------------------------------`);

console.log("====Female Marriage Eligibility===");
var FemaleMarriageEligibility = function (gender,age,girlName) {
 var res = (gender=="Female" && age>=21) ? `Hey "${girlName}" you are eligible for marriage.`
:`Hey "${girlName}" you are not eligible for marriage.`
  console.log(res);
}
FemaleMarriageEligibility("Female",17,"Jennifer");
FemaleMarriageEligibility("Female",27,"Milinda Gates");
console.log(`----------------------------------------------------`);