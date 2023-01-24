console.log(`1.Assignment`);
class Employee{
    constructor(empId,empName,empDept,empSal,empCompany){
        this.empId=empId,
        this.empName=empName,
        this.empDept=empDept,
        this.empSal=empSal,
        this.empCompany=empCompany
    }
}
const empAnil=new Employee(22,"Anil","IT",50000,"TCS");
const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new Employee(55,"rishi","Finance",47000,"TCS");
const empSonali=new Employee(66,"Sonali","Finance", 45000,"Infy");
const empMonika=new Employee(77,"Monika","IT",40000,"Wipro");
const empVinayak=new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahesh=new Employee(99,"Mahesh","HR",85000,"Infy");
console.log(`1.Find all the employee from Wipro company`);
const arrayofemployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
const arrayWiproEmployee = arrayofemployee.filter((employee)=>{
    return employee.empCompany=="Wipro";
});
arrayWiproEmployee.forEach((employee)=>{
// console.log(`Company Name: ${employee.empCompany}, Employee Name: ${employee.empName}`);
console.log(employee);
});

console.log(`---------------------------------------------------------------------------------------------`);
console.log(`2.Find all the employee from IT or HR Department`);
const arrayItHrEmployee = arrayofemployee.filter((employee)=>{
    return (employee.empDept=="IT" || employee.empDept=="HR");
});
arrayItHrEmployee.forEach((employee)=>{
    console.log(employee);
});

console.log(`---------------------------------------------------------------------------------------------`);
console.log(`3.find all the empId is greter than 50`);
const arrayOfGreater = arrayofemployee.filter((employee)=>{
    return employee.empId>50;
});
arrayOfGreater.forEach((employee)=>{
    console.log(employee);
});


console.log(`---------------------------------------------------------------------------------------------`);
console.log(`4.All employee whose name starts with A/V/M`);
arrayofemployee.forEach((employee)=>{
    if (employee.empName.startsWith("A")||employee.empName.startsWith("V")||employee.empName.startsWith("M")) {
        console.log(employee);
    }
});
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`5.Find average salary for the all department`);
let totalSal=0;
arrayofemployee.forEach((salary)=>{
    totalSal += salary.empSal;
});
console.log(`Average salary of all employees: ${totalSal/arrayofemployee.length}`);



console.log(`---------------------------------------------------------------------------------------------`);
console.log(`6.Find the average salary of IT department`);
let totalSalIT = 0;
const arrayOfSalIT = arrayofemployee.filter((employee)=>{
    return employee.empDept=="IT";
});
arrayOfSalIT.forEach((employee)=>{
    totalSalIT += employee.empSal;
});
console.log(`Average salary of "IT" department: ${totalSalIT/arrayOfSalIT.length}`);
console.log(`---------------------------------------------------------------------------------------------`);
