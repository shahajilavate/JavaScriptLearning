class Bank {
  constructor(bankName, location, accountNo, ifsc, intrestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNo = accountNo;
    this.ifsc = ifsc;
    this.intrestRate = intrestRate;
  }
}
const Bank1 = new Bank("AXIS_Bank", "Pune", 56748392, "AXB6787", `10%`);
const Bank2 = new Bank("SBI_Bank", " Solapur", 76378213, "SBI5647", `8%`);
const Bank3 = new Bank("ICICI_Bank", " Mumbai", 96378214, "ICI6647", `14%`);
const Bank4 = new Bank("KOTAK_Bank", "Wakad", 46378215, "KOT4647", `12%`);
const Bank5 = new Bank("HDFC_Bank", "Sangola", 36378213, "HDF3647", `9%`);
const Bank6 = new Bank("PUNJAB_Bank", "Miraj", 36378215, "PUN5647", `5%`);
console.log(Bank1);
console.log(Bank2);
console.log(Bank3);
console.log(Bank4);
console.log(Bank5);
console.log(Bank6);

const mapOfBank = new Map();
const keyOfMapEmployee = mapOfBank.keys();
console.log(keyOfMapEmployee);
for (const key of keyOfMapEmployee) {
  const Bank = mapOfBank.get(key);
  console.log(Bank.bankName, Bank.accountNo, Bank.intrestRate);
}
