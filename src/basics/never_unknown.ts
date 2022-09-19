let userInput:unknown /*Can hold any type because the type is unknown, it is different from the any time
                        because it can't be assign to another type, like a string or number while 
                        the any type can be assign to other types without a problem. Unknown is better than any*/
let userName:string

userInput = 5
userInput = 'Max'
if(typeof userInput === 'string') {
    userName = userInput
}

function generateError(message:string, code:number):never{ //never type is a function that will never return a value, it will always crush the script
    throw {message:message, errorCode:code}
}

generateError('An error ocurred', 500)