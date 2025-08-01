function stringHandsOn() {
    var str = "  Hey you are doing good, keep it up  ";
    console.log("---------- 1 ----------"); 
    console.log(`Given String is : ${str}`);

    console.log("---------- 2 ----------");
    var totalLength = str.length;
    console.log(`Total length of string is : ${totalLength}`);

    console.log("---------- 3 ----------");
    var strtrim= str.trim();
    console.log(`Remove leading and trailing extra spaces : ${strtrim}`);
    var trimLength = strtrim.length;
    console.log(`Length of string after trim: ${trimLength}`);

    console.log("---------- 4 ----------");
    var firstChar= strtrim.charAt(0);
    var lastChar = strtrim.charAt(33);
    console.log(`First Char is: ${firstChar} And Last char is : ${lastChar}`);

    console.log("---------- 5 ----------");
    var totalWords= strtrim.split(" ");
    console.log(`Count of total words : ${totalWords.length}`);

    console.log("---------- 6 ----------");
    var indexOfchar= strtrim.indexOf("good")
    console.log(`Index of word good is : ${indexOfchar}`);
    
    console.log("---------- 7 ----------");
    var subString= strtrim.slice(22);
    console.log(`The subString starting from index 22 is: ${subString}`);

    console.log("---------- 8 ----------");
    var strending= strtrim.endsWith("up");
    console.log(`String end with word up : ${strending}`);

    console.log("---------- 9 ----------");
    var srtStart = strtrim.startsWith("Hey");
    console.log(`String start with Hey : ${srtStart}`);

   


    

    


}
stringHandsOn();
