import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutonomosPage } from './autonomos.page';
import {AutonomoPageModule} from './autonomo/autonomo.module';

const routes: Routes = [
  {
    path: '',
    component: AutonomosPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        AutonomoPageModule,
    ],
  declarations: [AutonomosPage]
})
export class AutonomosPageModule {}
