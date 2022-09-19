function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
var someValue;
var combineValues = add; //if a variable is assign the value of a function, it will be of type any unless we specify it is a value
console.log(combineValues(8, 8));
var someFunction; //Type function, specifies the types of parameters and the type of the return value
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
