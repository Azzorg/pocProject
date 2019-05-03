import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TripCreationOnePage } from './trip-creation-one.page';

const routes: Routes = [
  {
    path: '',
    component: TripCreationOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TripCreationOnePage]
})
export class TripCreationOnePageModule {}
