
let bankSbi = {
    bankName: "Sbi",
    accType: "current",
    accno: 963852741123,
    Manager: "Elon"
};
console.log("Object 1. Bank SBI Details:", bankSbi);

console.log("-----------------------------------------------------------------------------------------------------------------");

let bankLocation = {
    street: "Gursale",
    city: "pune",
    pin: 413109
};
console.log("Object 2. Bank Location:", bankLocation);
console.log("-----------------------------------------------------------------------------------------------------------------");

 const step= Object.assign(bankSbi,bankLocation);
 console.log("Clone Obj1 And Obj2",step);
 
console.log("-----------------------------------------------------------------------------------------------------------------");


let rateOfInterest = {
homeLoanInterest: "12%",
personalLoanInterest: "8%",
duelInterest: "20%"
};
console.log("Object 3. Rate of Interest:", rateOfInterest);

console.log("-----------------------------------------------------------------------------------------------------------------");


let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.log("Merged SBI Details:",sbiDetails);

console.table(sbiDetails);


console.log("-----------------------------------------------------------------------------------------------------------------");

for (let key in sbiDetails) {

    const value = sbiDetails[key];

    console.log(`${key} : ${value}`);



}
