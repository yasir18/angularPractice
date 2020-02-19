import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'FormsExercise';
  constructor() { }

  ngOnInit() {
  }

}

