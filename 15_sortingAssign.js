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
const empRishi=new employee(55,"Rishi","Finance",47000,"TCS");
const empSonali=new employee(66,"Sonali","Finance", 45000,"Infy");
const empMonika=new employee(77,"Monika","IT",40000,"Wipro");
const empVinayak=new employee(88,"Vinayak","IT",75000,"TCS");
const empMahesh=new employee(99,"Mahesh","HR",85000,"Infy");
console.log(`Assignment.B : Sorting in Ascending & Descending `);
console.log(`--------------------------------------------------------`);
console.log(`1].Sort in ascending order of the employee ID.`);
const arrayOfEmployee = [ empAnil, empRadha, empRishi,  empSonali, empMonika,empVinayak,empMahesh];
arrayOfEmployee .sort((employee1, employee2)=>{
    return employee1.empId>employee2.empId ? 1 : -1;
 });
 arrayOfEmployee.forEach((currentValue)=>{
    console.log(currentValue.empId, currentValue.empName,currentValue.empDept);
 });
 console.log(`--------------------------------------------------------`);
 console.log(`2].Sort in ascending order of the employee department.`);
 arrayOfEmployee .sort((employeeDept1,employeeDept2)=>{
    return employeeDept1.empDept>employeeDept2.empDept ? 1 : -1;
 });
 arrayOfEmployee.forEach((currentValue)=>{
    console.log(currentValue.empId,currentValue.empDept,currentValue.empCompany);
 });
 console.log(`--------------------------------------------------------`);
 console.log(`3].Sorting array off employee in ascending order bye salary.`);
 arrayOfEmployee.sort((employee1, employee2)=> {
    return employee1.empSal > employee2.empSal ? -1 : 1;
 });
 arrayOfEmployee.forEach((currentValue)=>{
    console.log(currentValue.empName,currentValue.empSal,currentValue.empCompany);
 });
 console.log(`--------------------------------------------------------`);