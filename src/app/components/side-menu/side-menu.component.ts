import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Découvrir',
      url: '/list',
      icon: 'albums'
    },
    {
      title: 'Discover',
      url: '/discover',
      icon: 'globe'
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
