import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardformComponent } from './wizardform.component';
import { ArchwizardModule } from 'ng2-archwizard';
import { RouterModule,Routes } from '@angular/router';

const routing: Routes = [{
  path: '', component: WizardformComponent
}]
@NgModule({
  declarations: [WizardformComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),
    ArchwizardModule
  ]
})
export class WizardformModule { }
