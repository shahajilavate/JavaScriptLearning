var myName="mohit";
console.log(myName);
//functionExprestion
var showResult = function(){

    console.log("show....");

};
showResult()
//we can add function exprestion
var add = function(val1,val2) {
    var result =val1+val2;
    console.log("add",result);
    return result;
}
var result = add(10,20)
console.log(result);