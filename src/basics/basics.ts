function added(number1:number, number2:number, showResult:boolean, phrase:string){
    const result = number1 + number2
    if(showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
}

const num1 = 5
const num2 = 6
const printResulted = true
const resultPhrase = 'Result is: '

added(num1, num2, printResulted, resultPhrase);


