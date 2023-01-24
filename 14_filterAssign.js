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


console.log(`2.Assigment filter()`);

const arrayofemployeeFilter=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinayak,empMahesh];
arrayofemployeeFilter.filter((employee)=>{
    if(employee.empCompany=="TCS")
    console.log(`Company name : ${employee.empCompany} and employee name is : ${employee.empName}`);
   
});
console.log(`------------------------------------------------------`);
