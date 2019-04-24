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
    avatar: "./../../../assets/img/imgLocal/user1.jpg",
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
    // ./../../../assets/countries/france.png
    this.listTrip = [
      {
        name:"Europe Trip",
        countryImage: "./../../../assets/countries/ue.png"  
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
        avatar:"./../../../assets/img/imgLocal/user2.jpg",
        countryImage:"./../../../assets/countries/france.png",
      },
      {
        avatar:"./../../../assets/img/imgLocal/user3.jpg",
        countryImage:"./../../../assets/countries/uk.png",
      },
      {
        avatar:"./../../../assets/img/imgLocal/user4.jpg",
        countryImage:"./../../../assets/countries/usa.png",
      },
      {
        avatar:"./../../../assets/img/imgLocal/user5.jpg",
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
