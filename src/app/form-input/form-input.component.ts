import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../app.component';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() employees:Employee[];
  newEmployee=new Employee("","");
  name:string;
  quickLookId:string;

  constructor() {    
   }

  ngOnInit() {
  }

  onSubmit(){

   // console.log(this.employees);
    console.log(this.name);
    this.employees.push(new Employee(this.name,this.quickLookId));
    console.log(this.employees);
    //this.clear()
  }

  clear(){
    this.newEmployee.name="",
    this.newEmployee.quickLookId=""
  }
}
