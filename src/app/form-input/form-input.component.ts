import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../home/home.component';


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

    this.employees.push(new Employee(this.name,this.quickLookId));
    this.clear()
  }

  clear(){
    this.name="",
    this.quickLookId=""
  }
}
