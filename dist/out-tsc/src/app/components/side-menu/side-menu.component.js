import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var SideMenuComponent = /** @class */ (function () {
    //effect: 'flip',    
    function SideMenuComponent() {
        this.appPages = [
            {
                title: 'Fil d\'actualité',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Découvrir',
                url: '/discover',
                icon: 'albums'
            },
            {
                title: 'Mes Voyages',
                url: '/discover',
                icon: 'globe'
            }
        ];
        this.listTrip = [
            {
                name: "Europe Trip",
                countryImage: "./../../../assets/countries/france.png"
            },
            {
                name: "Rainy London",
                countryImage: "./../../../assets/countries/uk.png"
            }
        ];
        this.listFriendsTrip = [];
        this.user = {
            name: "Azzorg",
            avatar: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
            nbAbonnes: 124
        };
        // Options for the slider
        this.slideOpts = {
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 100
        };
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    SideMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-side-menu',
            templateUrl: './side-menu.component.html',
            styleUrls: ['./side-menu.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
export { SideMenuComponent };
//# sourceMappingURL=side-menu.component.js.map