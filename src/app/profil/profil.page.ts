import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  backgroundImgUrl : string = "./../../assets/img/background-image.jpg";

  user : any;

  constructor() { }

  ngOnInit() {
    this.getVisitingProfil();
  }

  /**
   * 
   */
  getVisitingProfil(){
    this.user = {
      pseudo: "Azzorg",
      image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
      nbAbonnes: 152
    };
  }

}
