function add(n1:number, n2:number){
    return n1 + n2
}

function printResult(num:number):void{ /*void means the function doesn't have a return statement, 
                                        if you have a return statement that doesn't have a value, that would be type undefined*/
    console.log('Result: ' + num)
}

printResult(add(5, 12))

let someValue:undefined

let combineValues:Function = add //if a variable is assign the value of a function, it will be of type any unless we specify it is a value
console.log(combineValues(8, 8))

let someFunction: (a:number, b:number) => number //Type function, specifies the types of parameters and the type of the return value

function addAndHandle(n1:number, n2:number, cb:(num:number) => void){ //function with a callback function with function type
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 20, (result) =>{
    console.log(result)
})

