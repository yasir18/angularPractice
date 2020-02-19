import { Component, OnInit, Input } from '@angular/core';
import {EmployeesService, Employee } from '../employees.service'

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

   employees:Employee[];
  constructor(private employeeService:EmployeesService) { }

  ngOnInit() {
    this.employees=this.employeeService.employees
  }
  

 

}
