import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import {ChartsComponent} from './charts.component';
import { FormsModule } from '@angular/forms';

const routing:Routes=[{
path:'',component:ChartsComponent
}]
@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routing),
    FormsModule,ChartsModule

  ]
})
export class ChartModule { }
