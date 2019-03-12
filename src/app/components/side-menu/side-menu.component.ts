import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  public appPages = [
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

  public listTrip = [
    {
      name:"Europe Trip",
      countryImage: "./../../../assets/countries/france.png"
    },
    {
      name:"Rainy London",
      countryImage: "./../../../assets/countries/uk.png"
    }
  ];

  public listFriendsTrip = [];

  public user = {
    name : "Azzorg",
    avatar: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
    nbAbonnes: 124
  }

  // Options for the slider
  public slideOpts = {
    effect: 'fade',
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 100
  };

  //effect: 'flip',    

  constructor() { }

  ngOnInit() {
    /*var mySwiper = new Swiper(".swiper", {
          effect: 'fade',
          loop: true,
          slidesPerView: 'auto'
        });*/
  }

}
