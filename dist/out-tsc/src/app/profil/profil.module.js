import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilPage } from './profil.page';
var routes = [
    {
        path: '',
        component: ProfilPage
    }
];
var ProfilPageModule = /** @class */ (function () {
    function ProfilPageModule() {
    }
    ProfilPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfilPage]
        })
    ], ProfilPageModule);
    return ProfilPageModule;
}());
export { ProfilPageModule };
//# sourceMappingURL=profil.module.js.map