import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { DisplayEmployeesComponent } from './display-employees/display-employees.component';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      FormInputComponent,
      DisplayEmployeesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
