import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

/** Custom components */
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterAppComponent } from './footer-app/footer-app.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  declarations: [
    SideMenuComponent,
    FooterAppComponent
  ],
  exports:[
    SideMenuComponent,
    FooterAppComponent
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class ComponentsModule { }
