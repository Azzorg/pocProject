import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DiscoverPage } from './discover.page';
var routes = [
    {
        path: '',
        component: DiscoverPage
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DiscoverPage]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());
export { DiscoverPageModule };
//# sourceMappingURL=discover.module.js.map