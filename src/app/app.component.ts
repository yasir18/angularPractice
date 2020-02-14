import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsExercise';
  employee:Employee = new Employee("yasir","ya185024");
  employees:Employee[] = [this.employee];
  
}
export class Employee{
  public name:string;
  public quickLookId:string;

  constructor(name:string,qlId:string){
    this.name=name;
    this.quickLookId=qlId;
  }
  
}