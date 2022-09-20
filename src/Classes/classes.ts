abstract class Department { //abstract classes are only to be inherited, it can be instantiated
    //public first_name:string; //public means that it can be accessed from anywhere, not only the class
    private employees: string[]; //private means that it will only be accessed within the class
    protected employers:string[] //protected means that it will only be accessed within the class or the classes that extends this class

    constructor(public first_name:string, protected readonly id:number){ //readonly means it can only be assign a value once
        //this.first_name = n;
        this.employees = []
        this.employers = []
    }

    abstract describe(this:Department):void //abstract method must be implemented in every sub class of the abstract class

    addEmployees(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }

    static createEmployee(first_name:string){ //static means that it won't be instantiate and will no be able to be access from within inside the class
        return {first_name: first_name}
    }
}

class ITDepartment extends Department {
    public admins:string[];
    private lastReport:string;
    private reports:string[];
    private static instance:ITDepartment;
    get mostRecentReport(){ //Read property
        if(this.lastReport){
            return this.lastReport
        } else {
            throw new Error("No report found")
        }
        
    }
    set recentReport(value:string){ //Set value of  property
        if(!value) {
            throw new Error("There was an error")
        } else {
            this.addReports(value)
        }
        
    }
    private constructor(admins:string[]){ //A private constructor means that it will only be accessed from within the class with static methods and properties
        super('IT', 1) //super calls the constructor of the parent class
        this.admins = admins
        this.reports = []
        this.lastReport = this.reports[0]
    }

    addEmployers(first_name:string){
        if(first_name === "Max"){
            return
        }
        this.employers.push(first_name)
    }

    addReports(text:string){
        this.reports.push(text)
        this.lastReport = text
    }

     describe() {
        console.log("Accounting Department - ID" + this.id)
    }
    
    static getInstance(){
        if(ITDepartment.instance){
            return this.instance
        }
        this.instance = new ITDepartment([])
    }
}

//const front_end = new ITDepartment(["Senior", "Junior"])
const front_end = ITDepartment.getInstance()!


front_end.addEmployees("John")
front_end.addEmployees("Doe")
front_end.addEmployers("Max")
front_end.addEmployers("Mark")
front_end.recentReport = 'React'
console.log(front_end.mostRecentReport)

/*const accounting = new ITDepartment(["Accountant"])
accounting.addEmployees("Max")
accounting.addEmployees("Mark")
accounting.describe()
accounting.printEmployeeInformation()
const employee1 = Department.createEmployee("Max")
console.log(employee1)*/