type Combinable = number | string //custom type
type ConversionDescription = 'as-number' | 'as-string'

function combine(
    input1:Combinable,
     input2:number | string, //union type
      resultConversion: 'as-number' | 'as-text' //literal type
    ){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    if(resultConversion === 'as-number'){
        return +result //converse result of function to number
    } else {
        return result.toString() //converse result of function to string
    }
    
}

const combinedAges =  combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames)