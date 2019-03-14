import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public logo = './../../../assets/logo/logo.png';

  public appPages = [
    {
      title: 'Fil d\'actualité',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Découvrir',
      url: '/discover',
      icon: 'copy'
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

  public listFriendsTrip = [
    {
      avatar:"https://oiseaurose.com/wp-content/uploads/roadtrip-etats-unis-1.jpg",
      countryImage:"./../../../assets/countries/france.png",
    },
    {
      avatar:"https://www.frommers.com/system/media_items/attachments/000/857/663/s500/1intromoyanbreenf.jpg",
      countryImage:"./../../../assets/countries/uk.png",
    },
    {
      avatar:"https://www.worldelse.com/wp-content/uploads/2017/10/Road-trip-au-Quebec-87.jpg",
      countryImage:"./../../../assets/countries/usa.png",
    },
    {
      avatar:"https://www.carnets-de-traverse.com/blog/wp-content/uploads/2015/02/alaska-roadtrip4.jpg",
      countryImage:"./../../../assets/countries/spain.png",
    }
  ];

  public user = {
    name : "Azzorg",
    avatar: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
    nbAbonnes: 124
  }

  // Options for the slider
  public slideOpts = {
    runCallbacksOnInit: true,
    watchOverflow: true
    //effect: 'fade',
    //loop: true,
    //slidesPerView: 'auto'
  };

  public slideFriendsTripOpts = {
    runCallbacksOnInit: true,
    watchOverflow: true,
    slidesPerView: 'auto',
  }

  //effect: 'flip',    

  constructor() { }

  ngOnInit() {
  }

}
