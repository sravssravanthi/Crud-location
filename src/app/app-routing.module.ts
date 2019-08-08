import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './crud/crud.module#CrudModule'},
  {path: 'calender', loadChildren: './calender/calender.module#CalenderModule'},
  {path: 'wizard', loadChildren:'./wizardform/wizardform.module#WizardformModule'},
  {path: 'charts', loadChildren:'./charts/chart.module#ChartModule'},
  {path:'tabledata',loadChildren:'./tabledata/tabledata.module#TabledataModule'},
  {path:'imageupload',component:ImageuploadComponent},
  {path:'fileupload',component:FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
