type Admin = {
    first_name: string;
    privileges:string[]
}

type Employee = {
    first_name:string;
    work: string;
}

type ElevatedEmployee = Admin & Employee; //intersection types

const el:ElevatedEmployee = {
    first_name: 'Stephano',
    privileges: ['create-server'],
    work: 'Hello'
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric

//function overloads helps to tell typescript the return type of a function
function add(a:number, b:number):number
function add(a:string, b:string):string
function add(a:string, b:number):string
function add(a:number, b:string):string
function add(a:Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    } else {
        return a + b
    }
}

const result = add('Max', 'Schwarz')
result.split(' ')

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name: ' + emp.first_name)
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }
    if('work' in emp){
        console.log('Work: ' + emp.work)
    }
    
}

printEmployeeInformation(el)

class Car {
    drive(){
        console.log('Driving a car...')
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...')
    }
    loadCargo(amount:number){
        console.log('Loading cargo: ' + amount)
    }
}

type Vehicle = Car & Truck

const v1 = new Car
const v2 = new Truck

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000)
    }
}

useVehicle(v2)
// Discriminated Union types
interface Bird {
    type: 'bird';
    flyingSpeed:number;
}

interface Horse {
    type: 'horse';
    runningSpeed:number;
}

type Animal = Bird | Horse

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ')
}

moveAnimal({type: 'bird', flyingSpeed:100})

//type casting

const userInput =<HTMLInputElement> document.getElementById('user-input') 
userInput.value = 'Hi there!'

const adminInput = document.getElementById('admin-input') as HTMLInputElement
adminInput.value = 'Hello There!'

//index types

interface ErrorContainer {
    [prop:string]:string; //establishes which type of property name we the object can have
}

const errorBag:ErrorContainer = {
    email: 'Not a valid email'
}

//optional chaining
const fetchUserData = {
    id: 'ui',
    first_name: 'Stephano',
    job: {title:'CEO', description:'My own company'}
}

console.log(fetchUserData?.job?.title) //helps access nested properties, checks if a property exists

//nullish coalescing

const userPost = null
const storedDate = userPost ?? "DEFAULT" //If the variable is null or undefined then the other value will be used
