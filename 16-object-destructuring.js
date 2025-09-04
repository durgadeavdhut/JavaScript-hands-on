console.log("======= Object Destructuring ===========");
const person = {
    fullName: "Stew Jobs",
    age: 23,
    isMarried: false,
    city: "Pune",
    country: "India",
    pin: "411057"
}
// const fullName = person.fullName;
// const city = person.city;
// const country = person.country;
// const pin = person.pin;

const {fullName, city, country, pin=10001, designation="UI Developer"} = person;

console.log(fullName, city, country, pin);