import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,Jsonp } from '@angular/http';
import  {HolidayServiceService} from './holiday-service.service';
import {MaterialModule,MdInputModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidayComponent } from './holiday/holiday.component';

const myRoutes: Routes = [ 
  {
    path: '',
    component: HolidayComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'details/:id', component: HolidayDetailsComponent},
  { path: '**', redirectTo:'home', pathMatch:'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HolidayDetailsComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(myRoutes)
  ],
  providers:[HolidayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
