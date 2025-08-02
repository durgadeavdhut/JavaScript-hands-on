console.log("--------------- 1 ---------------");
var square = function (num) {
    return num * num;
};
console.log(`Square of 5 : ${square(5)}`);
console.log(`Square of 6 : ${square(6)}`);
console.log(`Square of 25 : ${square(25)}`);
console.log(`Square of 100 : ${square(100)}`);
console.log(`Square of 67.89 : ${square(67.89)}`);
console.log(`Square of 59 : ${square(59)}`);
console.log("");

console.log("--------------- 2 ---------------");
console.log(`Type of square function : ${typeof square}`);
console.log("");

console.log("--------------- 3 ---------------");
var rectangle = function(length, width){
    return length * width;
}
console.log(`Area of a rectangle : ${rectangle(499,917)}`);
console.log("");

console.log("--------------- 4 ---------------");
var swapValues = function(value1,value2){
    console.log(`Before Swap : ${value1} , ${value2} `);
    var temp = value1;
    value1= value2;
    value2 = temp;
    console.log(`After Swap : ${value1} , ${value2}`);
}
swapValues("Mahi","Raina" );
console.log(" ");

var swapValues2 = function(value1,value2){
    console.log(`Before Swap : ${value1} , ${value2} `);
    var temp = value1;
    value1= value2;
    value2 = temp;
    console.log(`After Swap : ${value1} , ${value2}`);
}
swapValues2(55,77 );
console.log(" ");

console.log("--------------- 5 ---------------");
var stringAnalysis = function(){
    var str = "JS the most popular language of internet";
    console.log(`Total characters in string: ${str.length}`);
    console.log(`Character at index 6: ${str.charAt(6)}`);
    console.log(`Character at index 11: ${str.charAt(11)}`);
    console.log(`Last character: ${str.charAt(str.length - 1)}`);
    console.log(`First character: ${str.charAt(0)}`);
    console.log(`Third last character: ${str.charAt(str.length - 3)}`);

    var words = str.split(" ");
    var totalWords = words.length;
    console.log(`Total number of words: ${totalWords}`);
    console.log(`Square of total words: ${totalWords * totalWords}`);


}
stringAnalysis();

