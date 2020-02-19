import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { DisplayEmployeesComponent } from './display-employees/display-employees.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      FormInputComponent,
      DisplayEmployeesComponent,
      AboutComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      RouterModule.forRoot([
         {path:'home',component:HomeComponent},
         {path:'about',component:AboutComponent},
         {path:'', redirectTo:'home', pathMatch:'full'},
       ]
       )

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
 }
