
class employee{
    constructor(empId,empName,empDept,empSal,empCompany){
        this.empId=empId,
        this.empName=empName,
        this.empDept=empDept,
        this.empSal=empSal,
        this.empCompany=empCompany
    }
}
const empAnil=new employee(22,"Anil","IT",50000,"TCS");
const empRadha=new employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new employee(55,"rishi","Finance",47000,"TCS");
const empSonali=new employee(66,"Sonali","Finance", 45000,"Infy");
const empMonika=new employee(77,"Monika","IT",40000,"Wipro");
const empVinayak=new employee(88,"Vinayak","IT",75000,"TCS");
const empMahesh=new employee(99,"Mahesh","HR",85000,"Infy");

const mapOfEmployee=new Map();
mapOfEmployee.set(22,empAnil);
mapOfEmployee.set(33,empRadha);
mapOfEmployee.set(55,empRishi);
mapOfEmployee.set(66,empSonali);
mapOfEmployee.set(77,empMonika);
mapOfEmployee.set(88,empVinayak);
mapOfEmployee.set(99,empMahesh);

console.log(`1) Traverse the map using forEach with key and value in given format:`);
console.log(`----------------------------------------------------------------------------------------`);
mapOfEmployee.forEach((currentvalue, key) => {
    console.log(`${key}===> Name: ${currentvalue.empName}, Dept: ${currentvalue.empDept}, Company: ${currentvalue.empCompany}, Salary: ${currentvalue.empSal}`);
});
console.log(`----------------------------------------------------------------------------------------`);