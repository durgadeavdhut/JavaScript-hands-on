function add(p1, p2, ...args){
    console.log(p1, p2, args);    
}
// add(10);
add(10, 20, 40);
add(90, 80, 70, 60, 40, 30);

console.log("==== Function with default parameter value========");
function division(n1=1, n2=1){
    console.log(n1, n2);
    console.log(n1/n2);
}
division();
division(10, 20);
division(10, 40, 70);
division(10);