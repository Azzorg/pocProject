import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                IonicModule,
                IonicModule.forRoot(),
                AppRoutingModule
            ],
            declarations: [
                SideMenuComponent
            ],
            exports: [
                SideMenuComponent
            ],
            providers: [
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map