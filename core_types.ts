enum Roles{
    ADMIN = 'ADMIN',
    READ_ONLY = 5,
    AUTHOR = 7
}

const person:{
    name: string; //string
    age:number; //number
    hobbies:string[]; //array of strings
    role:[number, string]; //tuple, array with exact types and length
    roles: any; //any type
} = {
    name: "Stephano",
    age: 29,
    hobbies: ['Playing Piano', 'Walking'],
    role: [2, 'author'],
    roles: Roles.ADMIN

}

let favoriteActivities:string[]
favoriteActivities =['Sports']
let activities:(string | number)[] //array with more than 1 type
activities = ['piano', 10]

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
