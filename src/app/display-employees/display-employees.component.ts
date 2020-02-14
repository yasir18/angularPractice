import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../app.component';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

  @Input() employees:Employee[];
  constructor() { }

  ngOnInit() {
  }

}
