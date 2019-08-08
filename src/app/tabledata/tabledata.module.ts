import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata.component';
import { RouterModule,Routes } from '@angular/router';
// import {DataTableModule} from 'primeng/primeng';
const routing:Routes=[{
  path:'',component:TabledataComponent
}]
@NgModule({
  declarations: [TabledataComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),
    
  ]
})
export class TabledataModule { }
