export class Employee{
    name:string;
    employeeId: number;

    constructor(name:string, empId:number){
        this.name = name;
        this.employeeId = empId;
    }

    setEmployeeData(name:string, employeeId: number){
        this.name = name;
        this.employeeId = employeeId;
    }

    getEmployeeName():string{
        return this.name;
    }
}