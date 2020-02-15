import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'FormsExercise';
  employee:Employee = new Employee("yasir","ya185024");
  employees:Employee[] = [this.employee];

  constructor() { }

  ngOnInit() {
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
