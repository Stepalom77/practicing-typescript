const names:Array<string> = [] //Generic Array Type, type connected to another type, is the same as string[]

const promise:Promise<string> = new Promise((resolve, reject) => { //Generic Promise Type
    setTimeout(() => {
        resolve('This is done')
    },2000)
})

function merge<object1 extends object, object2 extends object>(objA: object1, objB: object2){ //custom generics, extends specify a constrain which could be the type that it belongs to
    return Object.assign(objA, objB)
}

const mergedObj = merge({name:'Max'}, {age:30})
console.log(mergedObj.name)

interface Lengthy{
    length:number
}

function countAndDescribe<T extends Lengthy>(element:T): [T, string]{
    let descriptionText = 'Got no value'
    if(element.length === 1){
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements'
    }
    return [element, descriptionText ]
}

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){ //keyof tells typescript that a generic type is the key of another generic type 
    return obj[key]
}

class DataStorage<T extends string | number | boolean> {
    private data:T[] = [];

    addItem(item:T){
        this.data.push(item)
    }

    removeItem(item:T){
        if(this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max')
textStorage.addItem('Stephano')
textStorage.removeItem('Max')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
const maxObj = {name:'Max'}
/*
const objStorage = new DataStorage<object>()
objStorage.addItem({name: 'Max'})
objStorage.addItem({name: 'Stephano'})
objStorage.removeItem({name: 'Max'})
console.log(objStorage.getItems())*/

interface CourseGoal {
    title:string;
    description:string;
    completeUntil: Date;
}

function createCourseGoal(title:string, description:string, data:Date):CourseGoal{
    let courseGoal: Partial<CourseGoal> = {} //makes all properties optional
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = data
    return courseGoal as CourseGoal
}

const first_names:Readonly<string[]> = ['Max', 'Stephano'] // can't be modify or change the value
//first_names.push('Manu')