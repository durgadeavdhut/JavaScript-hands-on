console.log("---------------------------------------------------------------------------------------------");

function Bank(bankName,location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

const yesBank = new Bank ("Yes Bank", "pune", "YESB0000030", 92020);
console.log(yesBank);

const sbiBank = new Bank ("Sbi Bank", "pune", "SBI98000030", 978020);
console.log(sbiBank);

const mahBank = new Bank ("Maharashtra Bank", "pune", "MAHB0007", 90420);
console.log(mahBank);


const axisBank = new Bank ("Axis Bank", "pune", "AXIS76B00030", 90420);
console.log(axisBank);
console.log("---------------------------------------------------------------------------------------------");
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTimeTime = "6 PM IST";
console.log(`Open Time Of SBI Bank : ${sbiBank.openTime} and Its close time : ${sbiBank.closeTimeTime}`);
console.log("---------------------------------------------------------------------------------------------");
console.log(`Bank Name : ${axisBank.bankName} and Its close time : ${axisBank.closeTimeTime}`);
console.log("---------------------------------------------------------------------------------------------");
console.log(`Bank Name : ${yesBank.bankName}, Branch Code : ${yesBank.branchCode} and Its open time : ${yesBank.openTime}`);
console.log("---------------------------------------------------------------------------------------------");
