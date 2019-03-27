import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @ViewChild('slideWithMyTrips') slideWithMyTrips: any;
  @ViewChild('slideWithFriendsTrips') slideWithFriendsTrips: any;

  // Options for the slider
  slideOpts = {
    initialSlide: 0,
    centeredSlides: false
  };

  slideFriendsTripOpts = {
    initialSlide: 0,
    slidesPerView: 'auto',
    centeredSlides: false
  }

  public listTrip : any;

  public listFriendsTrip :any;

  //effect: 'flip',    

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
    },
    {
      title: 'Nouveau voyage',
      url: '/trip-creation',
      icon: 'add'
    }
  ];

  public user = {
    name : "Azzorg",
    avatar: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
    nbAbonnes: 124
  }



  constructor() { }

  ngOnInit() {
    // Init the list of the user's trips
    this.initUserTrips();

    // Init the list of friends' trip
    this.initListFriendsTrip();
  }

  /**
   * Initialize the list of the user's trips done currently
   */
  initUserTrips(){
    this.listTrip = [
      {
        name:"Europe Trip",
        countryImage: "./../../../assets/countries/france.png"
      },
      {
        name:"Rainy London",
        countryImage: "./../../../assets/countries/uk.png"
      }
    ];
  }

  /**
   * Initialize the list of trip made by the persons followed
   */
  initListFriendsTrip(){
    this.listFriendsTrip = [
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
  }

  
   ////////////////////////////// FOR IMAGES CHOICE SLIDER FUNCTIONNEMENT
  /**
   * Move to Next slide
   * @param object 
   * @param slideView 
   */
  slideNextSideMenu(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabledSideMenu(object, slideView);
    });
  }

  /**
   * Move to previous slide
   * @param object 
   * @param slideView 
   */
  slidePrevSideMenu(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabledSideMenu(object, slideView);
    });;
  }

  /**
   * Method called when slide is changed by drag or navigation
   * @param object 
   * @param slideView 
   */
  slideDidChangeSideMenu(object, slideView) {
    this.checkIfNavDisabledSideMenu(object, slideView);
  }

  /**
   * Call methods to check if slide is first or last to enable disbale navigation
   * @param object 
   * @param slideView 
   */
  checkIfNavDisabledSideMenu(object, slideView) {
    this.checkisBeginningSideMenu(object, slideView);
    this.checkisEndSideMenu(object, slideView);
  }

  /**
   * Check if the slider is at the beginning
   * @param object 
   * @param slideView 
   */
  checkisBeginningSideMenu(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  /**
   * Check if the slider is at the end
   * @param object 
   * @param slideView 
   */
  checkisEndSideMenu(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }


}
