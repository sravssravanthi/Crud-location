import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderComponent } from './calender.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';

const routing: Routes = [{
  path: '', component: CalenderComponent
}]
@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),
    NgbModalModule,FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})

export class CalenderModule {
  
 }
