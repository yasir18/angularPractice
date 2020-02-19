import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

employees:Employee[] = new Array(new Employee("dsad","dsada"));

constructor() { }

addEmployee(employee:Employee){
  this.employees.push(employee);
}

getEmployees(){
  return this.employees;
}

}

export class Employee{
  public name:string;
  public quickLookId:string;

  constructor(name:string,qlId:string){
    this.name=name;
    this.quickLookId=qlId;
  }
  
}
