class Vehicle {
    constructor(brand, model, type, color, price) {
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.color = color;
        this.price = price;
    }
showDetails() {
        console.log(`Vehicle Details : Brand: ${this.brand}, Model: ${this.model}, Type: ${this.type}, Color: ${this.color}, Price: ${this.price}`);
    }
}


let vehicle1 = new Vehicle("Toyota", "Fortuner", "SUV", "White", "35 Lakhs");
let vehicle2 = new Vehicle("Mahindra", "XUV 700", "SUV", "Black", "20 Lakhs");
let vehicle3 = new Vehicle("Honda", "City", "Sedan", "Black", "14 Lakhs");
let vehicle4 = new Vehicle("Tata", "Harrier", "SUV", "Blue", "18 Lakhs");
let vehicle5 = new Vehicle("Royal Enfield", "Classic 350", "Bike", "Green", "2 Lakhs");

vehicle1.showDetails();
vehicle2.showDetails();
vehicle3.showDetails();
vehicle4.showDetails();
vehicle5.showDetails();


console.log("-----------------------------------------------------------------------------------------------------------------");


class College {
    constructor(name, city, university, rating) {
        this.name = name;
        this.city = city;
        this.university = university;
        this.rating = rating;
    }

   
    display() {
        console.log(`College Details : Name: ${this.name}, City: ${this.city}, University: ${this.university}, Rating: ${this.rating}`);
    }
}


let college1 = new College("Zeel", "Pune", "SPPU", "A+");
let college2 = new College("SPCOET", "Pune", "SPPU", "A+");
let college3 = new College("COEP", "Pune", "SPPU", "A+");
let college4 = new College("KJ", "Pune", "SPPU", "A+");


college1.display();
college2.display();
college3.display();
college4.display();