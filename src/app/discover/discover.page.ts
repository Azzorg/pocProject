import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
// import { Platform } from 'ionic-angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class DiscoverPage implements OnInit {
  bgImage: String;
  nameTrip: String;
  private listNotification : Array<any>;
  trip: any;
  actionDone: String;
  blurTitle: boolean;
  marginTopValue: number;

  constructor(@Inject(DOCUMENT) document /*, public platform : Platform*/) { }

  ngOnInit() {
    console.log("NgOnInit discover");
    this.bgImage = "../../assets/img/yocemite1.jpg";
    this.blurTitle = false;
    // this.bgImage = "https://www.latina.fr/upload/news/main/5c7657d51825b6.81294857.jpg";
    this.nameTrip = "Grand West Trip";
    this.generateTrip();


    /* Test bloc
    
    console.log("Document : ", document);
    console.log("View initialized ... ");
    let screenHeight =  window.screen.availHeight;
    let firstNotifHeight = document.getElementsByClassName("content")[0].getBoundingClientRect().height;
    let footerHeight = document.getElementById("footer").getBoundingClientRect().height;
    let titleHeight =  document.getElementById("title_trip").getBoundingClientRect().height;
    let titleMarginTop = document.getElementById("title_trip").getBoundingClientRect().top;
    console.log('list of notification : ', document.getElementsByClassName("content"));
    console.log("Heights and margin top : ", screenHeight, " // ", titleHeight, " // ", titleMarginTop, " // ", firstNotifHeight, " // ", footerHeight);

    this.marginTopValue = screenHeight - titleHeight - titleMarginTop - firstNotifHeight - footerHeight;

    console.log("Margin-top : " + this.marginTopValue);
    */
  }

  ngAfterViewInit(){
    console.log("length of list notification in after view init : ", document.getElementsByClassName("content"));
    /*console.log("View initialized ... ");
    let screenHeight =  window.screen.availHeight;
    let titleHeight =  document.getElementById("title_trip").getBoundingClientRect().height;
    let titleMarginTop = document.getElementById("title_trip").getBoundingClientRect().top;
    let firstNotifHeight = document.getElementsByClassName("content")[0].getBoundingClientRect().height;
    let footerHeight = document.getElementById("footer").getBoundingClientRect().height;

    this.marginTopValue = screenHeight - titleHeight - titleMarginTop - firstNotifHeight - footerHeight;

    console.log("Margin-top : " + this.marginTopValue);*/
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e){
    //console.log("Page scrolling : ", document.getElementById("main_container").getBoundingClientRect().top);
    if(document.getElementById("main_container").getBoundingClientRect().top < 5){
      this.blurTitle = true;
      let element = document.getElementById('title_trip');
      element.classList.add('sticky');
  
    } else {
      this.blurTitle = false;
      let element = document.getElementById('title_trip');
      element.classList.remove('sticky');
    }
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
          image: "./../../assets/img/imgLocal/user1.jpg"
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
          image: "./../../assets/img/imgLocal/userClem.jpg"
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
          image: "./../../assets/img/imgLocal/userTheo.jpg"
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
          image: "./../../assets/img/imgLocal/user1.jpg"
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
          image: "./../../assets/img/imgLocal/user1.jpg"
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
          image: "./../../assets/img/imgLocal/userClem.jpg"
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
          image: "./../../assets/img/imgLocal/userTheo.jpg"
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
          image: "./../../assets/img/imgLocal/user1.jpg"
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
