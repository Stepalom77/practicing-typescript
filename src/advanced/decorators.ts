/*function Logger(logString:string){
    return function (target:Function){
        console.log(logString)
        console.log(target)
    }
}

function WithTemplate(template:string, hookId:string){
    return function(construction:any){
        const hookEl = document.getElementById(hookId)
        const p = new construction()
        if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Persons {
    name = 'Max'

    constructor(){
        console.log('Creating person object...')
    }
}

const person = new Persons()

console.log(person)

function Log(target:any, propertyName:string | Symbol){
    console.log('Property decorator')
    console.log(target, propertyName)
}

function Log2(target:any, name:string, description:PropertyDecorator){
    console.log('Accessor decorator!')
    console.log(target)
    console.log(name)
    console.log(description)
}

function Log3(target:any, name:string | Symbol, description:PropertyDecorator){
    console.log('Method decorator!')
    console.log(target)
    console.log(name)
    console.log(description)
}

function Log4(target:any, name:string | Symbol, position:number){
    console.log('Method decorator!')
    console.log(target)
    console.log(name)
    console.log(position)
}
class Product {
    @Log
    title:string;
    private _price:number

    //@Log2
    set price(val:number){
        if(val > 0){
            this._price = val
        } else {
            throw new Error('Invalid price')
        }
        
    } 
    constructor(t:string, p:number){
        this.title = t
        this._price = p
    }

    //@Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price * (1 + tax)
    }
}*/