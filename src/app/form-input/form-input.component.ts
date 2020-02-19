import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {EmployeesService, Employee } from '../employees.service'


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  name:string="";
  quickLookId:string="";
  newEmployee:Employee = new Employee('','');
  @ViewChild('empForm') form: any;

  constructor(private employeeServices:EmployeesService) {    
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.value)
    this.employeeServices.addEmployee(this.form.value);
    this.clear()
  }

  clear(){
    this.name="",
    this.quickLookId=""
  }
}
