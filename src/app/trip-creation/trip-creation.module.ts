import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from './../components/components.module';

import { TripCreationPage } from './trip-creation.page';

/* To pan on the image */
import { ZoomableCanvasComponent } from '@durwella/zoomable-canvas';

const routes: Routes = [
  {
    path: '',
    component: TripCreationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TripCreationPage, ZoomableCanvasComponent]
})
export class TripCreationPageModule {}
