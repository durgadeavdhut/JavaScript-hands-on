function Player(fullName, age, city){
    this.fullName = fullName;
    this.age = age;
    this.city = city;
}

const playerVirat = new Player("Virat Kohli", 34, "Delhi");
console.log(playerVirat);

const playerRohit = new Player("Rohit Sharma", 35, "Mumbai");
console.log(playerRohit);

const playerDhoni = new Player("MS Dhoni", 43, "Chennai");
console.log(playerDhoni);

Player.prototype.country = "India";
console.log(`Dhoni's country : ${playerDhoni.country}`);
console.log(`Rohit's country : ${playerRohit.country}`);
console.log(`Virat's country : ${playerVirat.country}`);

const array = [10, 20, 30 ,40];
array.push(50);