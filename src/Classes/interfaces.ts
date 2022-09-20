
interface Named {
    readonly first_name?:string;
    outputNamed?:string //optional property
}
interface Greetable extends Named { //interfaces can only for defining the types of objects
    //readonly first_name:string;
    age:number;
    greet(phrase:string):void;
}

interface AddFn { //interfaces can also be used to defined types in a function
    (a:number, b:number):void
}

let added:AddFn

added = (n1:number, n2:number) => {
    return n1 + n2
}

class Person implements Greetable {
    first_name?: string; //optional property
    age:number
    constructor(n:string, age:number){
        this.first_name = n
        this.age = age
    }

    greet(phrase:string){
        console.log(phrase + ' ' + this.first_name)
    }

}

let user1:Greetable
user1 = new Person('Stephano', 29)

user1.greet('Hi there, I am')