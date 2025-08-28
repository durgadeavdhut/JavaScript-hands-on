class Person{
   // Data member 
   // Constructor 
   constructor(fullName, age, city){
     this.fullName = fullName;
     this.age = age;
     this.city = city;
   }
   // Member Function
   details(){
    console.log(`Details: ${this.fullName}, ${this.age}, ${this.city}`);
   }
}

const stew = new Person("Stew Jobs", 45, "LA");
stew.details();
console.log(stew);

const elon = new Person("Elon Musk", 34, "Pune");
elon.details();
console.log(elon);