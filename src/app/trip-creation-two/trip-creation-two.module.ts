import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TripCreationTwoPage } from './trip-creation-two.page';

const routes: Routes = [
  {
    path: '',
    component: TripCreationTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TripCreationTwoPage]
})
export class TripCreationTwoPageModule {}
