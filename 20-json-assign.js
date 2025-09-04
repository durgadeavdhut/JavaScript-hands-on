let jsonpar=`{
"name":"Aleix Melon",
"id":"E00245",
"role":["Dev", "DBA"],
"age":23,
"doj":"11-12-2019",
"married":false,
"address":{
    "street":"32, Laham St.",
    "city":"Innsbruck",
    "country":"Austria"},
    "referred-by":"E0012"
    }`;

const jsonobj =JSON.parse(jsonpar);
console.log(typeof jsonobj);

console.table(jsonobj);

console.log("log Dev :",jsonobj.role[0]);

console.log("log Last Name:",jsonobj.name.split(" ")[1]);
console.log("log joining year:",jsonobj.doj.split("-")[2]);