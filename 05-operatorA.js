console.log("--------------------1 -------------------- ");

function squareOfWordLength(word) {
    var length = word.length;
    var square = length * length;
    console.log(`Given word: "${word}", Length: ${length}, Square of Length: ${square}`);
    return square;
}

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");

console.log("--------------------2 -------------------- ");

function stringOperations() {
    var str = "I am MERN Stack Developer";
    var length = str.length;
    var words = str.split(" ").length;

    console.log(`String length Divides total words = ${length} / ${words} = ${length / words}`);
    console.log(`String length Multiply total words = ${length} * ${words} = ${length * words}`);
}

stringOperations();
