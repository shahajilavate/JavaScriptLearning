console.log("====TCS Interview Eligibility===");
var InterviewEligibility = function (GrandScore,HscScore,SscScore,CandidateName) {
var TCS =(GrandScore>=70 || HscScore>=80 || SscScore>=90) ? `congrates ${CandidateName} you are eligible for TCS interview.`
:`Unfortunately "${CandidateName}".`
 console.log(TCS);
}
InterviewEligibility(80,86,90,"Krishna")
var InterviewEligibility = function (GrandScore,HscScore,SscScore,CandidateName) {
    var TCS =(GrandScore>=70 || HscScore>=80 || SscScore>=90) ? `congrates ${CandidateName} you are eligible for TCS interview.`
    :`Unfortunately "${CandidateName}".`
     console.log(TCS);
    }
    InterviewEligibility(70,65,55,"Soham")
    
var InterviewEligibility = function (GrandScore,HscScore,SscScore,CandidateName) {
    var TCS =(GrandScore>=70 || HscScore>=80 || SscScore>=90) ? `congrates ${CandidateName} you are eligible for interview.`
    :`Unfortunately ${CandidateName} you are not eligible for the TCS interview.`
     console.log(TCS);
    }
    InterviewEligibility(60,79,88,"Dineh")






