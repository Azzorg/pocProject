import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  bgImage: String;
  nameTrip: String;
  private listNotification : Array<any>;
  trip: any;
  actionDone: String;

  

  constructor() { }

  ngOnInit() {
    this.bgImage = "../../assets/img/yocemite1.jpg";
    // this.bgImage = "https://www.latina.fr/upload/news/main/5c7657d51825b6.81294857.jpg";
    this.nameTrip = "Farwest Trip";

    this.generateTrip();

  }

  /**
   * Generate the trip with data
   */
  private generateTrip() {

    // Get notification for the trip
    this.listNotification = [
      {
        user:{
          name:"Azzorg",
          image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg"
        },
        action:{
          idAction: 0
        },
        lieu: "Yosemite National Park, CA, États-Unis",
        date: "Il y a 2 heures",
        nbLike: 125,
        nbComment: 98
      },
      {
        user:{
          name:"Benclem",
          image: "http://www.galerie-imagine.fr/images/image-de-profil_6.jpg"
        },
        action:{
          idAction: 2
        },
        lieu: "Sequoia National Park, CA, États-Unis",
        date: "Il y a 2 jours",
        nbLike: 50,
        nbComment: 8
      },
      {
        user:{
          name:"Slokhas",
          image: "https://cdn.radiofrance.fr/s3/cruiser-production/2017/07/b162611f-0afd-4de3-a958-76ebd34ca97a/640_polar_gettyimages-691829276.jpg"
        },
        action:{
          idAction: 1
        },
        lieu: "Las Vegas, NV, États-Unis",
        date: "Il y a 4 jours",
        nbLike: 74,
        nbComment: 51
      },
      {
        user:{
          name:"Azzorg",
          image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg"
        },
        action:{
          idAction: 1
        },
        lieu: "Grand Canyon, AZ, États-Unis",
        date: "Il y a 6 jours",
        nbLike: 1764,
        nbComment: 1564
      },
      {
        user:{
          name:"Azzorg",
          image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg"
        },
        action:{
          idAction: 0
        },
        lieu: "Lake Powell, AZ, États-Unis",
        date: "Il y a 7 jours",
        nbLike: 1364,
        nbComment: 1505
      },
      {
        user:{
          name:"Benclem",
          image: "http://www.galerie-imagine.fr/images/image-de-profil_6.jpg"
        },
        action:{
          idAction: 2
        },
        lieu: "Zion National Park, UT, États-Unis",
        date: "Il y a 9 jours",
        nbLike: 1553,
        nbComment: 1659
      },
      {
        user:{
          name:"Slokhas",
          image: "https://cdn.radiofrance.fr/s3/cruiser-production/2017/07/b162611f-0afd-4de3-a958-76ebd34ca97a/640_polar_gettyimages-691829276.jpg"
        },
        action:{
          idAction: 2
        },
        lieu: "Dixie National Forest, UT, États-Unis",
        date: "Il y a 10 jours",
        nbLike: 1019,
        nbComment: 1147
      },
      {
        user:{
          name:"Azzorg",
          image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg"
        },
        action:{
          idAction: 0
        },
        lieu: "Bryce Canyon, UT, États-Unis",
        date: "Il y a 11 jours",
        nbLike: 426,
        nbComment: 1628
      }
    ];

    // Get trip
    this.trip = {
      name: this.nameTrip,
      image: this.bgImage,
      notifications: this.listNotification
    };
  }

  /**
   * Used to transform the idAction to description
   * @param action 
   */
  public getAction(action: any){
    switch (action.idAction){
      case 0:
        // Commentaire
        return " a commenté une publication.";
      case 1:
        // Ajout de photos
        return " a ajouté 3 photos."
      case 2:
        // Création d'étape
        return " a créé une étape."
      default:
        return " a fait un dab."

    }
  }
}
