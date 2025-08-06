console.log("================ 1 ================");

function maleMarriageEligibility(gender, age, boyName) {
    var message = (gender === "Male" && age >= 21) 
        ? `Hey ${boyName} you are eligible for Marriage` 
        : `Hey ${boyName} you are Not eligible for Marriage`;

    console.log(message);
}

maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log("================ 2 ================");
function femaleMarriageEligibility(gender, age, girlName) {
    const message = (gender === "Female" && age >= 18)
        ? `Hey ${girlName} you are eligible for Marriage`
        : `Hey ${girlName} you are Not eligible for Marriage`;

    console.log(message);
}

femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");

