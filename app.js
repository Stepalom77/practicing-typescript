function add(number1, number2, showResult, phrase) {
    var result = number1 + number2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 6;
var printResult = true;
var resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);
