import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trip-creation',
  templateUrl: './trip-creation.page.html',
  styleUrls: ['./trip-creation.page.scss'],
})
export class TripCreationPage implements OnInit {
  
  @ViewChild('slideWithNav2') slideWithNav2: any;
  
  sliderTwo: any;
  
  slideOptsTwo = {
    initialSlide: 0,
    //loop: true,
    slidesPerView: 'auto',
    centeredSlides: false
  };

  constructor() {
   }

  ngOnInit() {
    this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 6,
            image: 'https://media.deseretdigital.com/file/fdd8867843'
          },
          {
            id: 7,
            image: 'https://www.myutahparks.com/.image/t_share/MTQ4MzM1NjgyNTMwNTE4Nzcy/bryce-amphitheater-inspiration-point_dp_680.jpg'
          },
          {
            id: 8,
            image: 'https://cdn-image.travelandleisure.com/sites/default/files/1461787471/bryce-canyon-midday-NP0416.jpg'
          },
          {
            id: 9,
            image: 'https://thumbor.thedailymeal.com/7xRgFvtkSfDB83Uimvk-XpvK7eY=/774x516/https://www.theactivetimes.com/sites/default/files/uploads/m/main-shutterstock_241738303.jpg'
          },
          {
            id: 10,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg/1200px-USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg'
          },
          {
            id: 11,
            image: 'https://cdn.rubysinn.com/wp-content/uploads/2014/11/Bryce-canyon-overlook.jpg'
          }
        ]
      };
  }

    //Move to Next slide
    slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }
  
    //Move to previous slide
    slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });;
    }
  
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }
  
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
      this.checkisBeginning(object, slideView);
      this.checkisEnd(object, slideView);
    }
  
    checkisBeginning(object, slideView) {
      slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
      });
    }
    checkisEnd(object, slideView) {
      slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
      });
    }

}
