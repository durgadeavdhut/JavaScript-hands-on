"use strict";

console.log("---------------------------------------------------------------------------------------------");

function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

var yesBank = new Bank("Yes Bank", "pune", "YESB0000030", 92020);
console.log(yesBank);
var sbiBank = new Bank("Sbi Bank", "pune", "SBI98000030", 978020);
console.log(sbiBank);
var mahBank = new Bank("Maharashtra Bank", "pune", "MAHB0007", 90420);
console.log(mahBank);
var axisBank = new Bank("Axis Bank", "pune", "AXIS76B00030", 90420);
console.log(axisBank);
console.log("---------------------------------------------------------------------------------------------");
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTimeTime = "6 PM IST";
console.log("Open Time Of SBI Bank : ".concat(sbiBank.openTime, " and Its close time : ").concat(sbiBank.closeTimeTime));
console.log("---------------------------------------------------------------------------------------------");
console.log("Bank Name : ".concat(axisBank.bankName, " and Its close time : ").concat(axisBank.closeTimeTime));
console.log("---------------------------------------------------------------------------------------------");
console.log("Bank Name : ".concat(yesBank.bankName, ", Branch Code : ").concat(yesBank.branchCode, " and Its open time : ").concat(yesBank.openTime));
console.log("---------------------------------------------------------------------------------------------");