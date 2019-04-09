import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from './../components/components.module';
import { BadgesModalComponent } from './../components/badges-modal/badges-modal.component';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
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
  declarations: [ProfilPage],
  entryComponents: [BadgesModalComponent]
})
export class ProfilPageModule {}
