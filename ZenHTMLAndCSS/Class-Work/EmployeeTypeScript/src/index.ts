import { Document } from "./document";
import { Employee } from "./employee";

let doc = new Document('Adhaar', 1234);

//doc.setDocumentDetail('Adhaar', 17834);

let employee = new Employee('venkat', 456789);
//

employee.setEmployeeData('venkat', 456789);

console.log(employee.getEmployeeName());

//tsc console.log()