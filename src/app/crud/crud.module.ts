import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CrudComponent } from './crud.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';

import { SelectdataComponent } from './selectdata/selectdata.component';
import { LocationComponent } from './location/location.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { CitylocationComponent } from './citylocation/citylocation.component';
import { AgmCoreModule } from '@agm/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [
  {path:'',component:CrudComponent},
  {path:'view',component:ViewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'delete',component:DeleteComponent},
  {path:'selectdata',component:SelectdataComponent},
  {path:'location',component:LocationComponent},
  {path:'geolocation',component:GeolocationComponent},
  {path:'citylocation',component:CitylocationComponent}
]
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [CrudComponent, ViewComponent, EditComponent, DeleteComponent, SelectdataComponent, LocationComponent, GeolocationComponent, CitylocationComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,NgbPaginationModule,HttpClientModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzSnXXXXXXXXXXXXXXXXXSZGGWU',
      language: 'en',
      libraries: ['geometry', 'places']

    })
  ]
})
export class CrudModule { }
