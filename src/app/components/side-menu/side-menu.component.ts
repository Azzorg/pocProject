import { Component, OnInit } from '@angular/core';

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
      name:"Grand West Trip",
      countryImage: "./../../../assets/countries/usa.png"
    },
    {
      name:"Vamos a Barcelona",
      countryImage: "./../../../assets/countries/spain.png"
    },
    {
      name:"Rainy London",
      countryImage: "./../../../assets/countries/uk.png"
    },
    {
      name:"Le Mans Classic",
      countryImage: "./../../../assets/countries/france.png"
    }
  ];

  public user = {
    name : "Azzorg",
    avatar: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
    nbAbonnes: 124
  }

  constructor() { }

  ngOnInit() {}

}
