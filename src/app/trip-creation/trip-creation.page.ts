import { Component, OnInit, ViewChild } from '@angular/core';
//require('caman').Caman;

@Component({
  selector: 'app-trip-creation',
  templateUrl: './trip-creation.page.html',
  styleUrls: ['./trip-creation.page.scss'],
})
export class TripCreationPage implements OnInit {
  //Caman = require('caman').Caman;

  brightness : number = 0;
  contrast : number = 0;
  saturation : number = 0;

  filters : string = "brightness(10)";
  
  @ViewChild('slideWithNav2') slideWithNav2: any;
  
  sliderTwo: any;
  
  slideOptsTwo = {
    initialSlide: 0,
    //loop: true,
    slidesPerView: 'auto',
    centeredSlides: false
  };

  urlImage: String;

  constructor() {
   }

  ngOnInit() {
    this.getTripImages();
    this.urlImage = this.sliderTwo.slidesItems[0].image;
  }


  /**
   * Get all images saved for this trip to fill the slider
   */
  getTripImages(){
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

  /**
   * Method to change url of the picture
   */
  changeImageShown(url){
    this.urlImage = url;
  }
  
  onRangeChanged(filter: string){
    switch (filter){

      case "brightness":
        console.log("BRIGHTNESS");
        break;
      case "contrast":
        console.log("CONTRAST");
        break;
      case "saturation":
        console.log("SATURATION");
        break;
    }

    /*console.log("Filter : ", filter);
    console.log("Brightness : ", this.brightness);
    console.log("Contrast : ", this.contrast);
    console.log("saturation : ", this.saturation);*/
  }


  
  ////////////////////////////// FOR SLIDER FUNCTIONNEMENT
  /**
   * Move to Next slide
   * @param object 
   * @param slideView 
   */
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  /**
   * Move to previous slide
   * @param object 
   * @param slideView 
   */
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  /**
   * Method called when slide is changed by drag or navigation
   * @param object 
   * @param slideView 
   */
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  /**
   * Call methods to check if slide is first or last to enable disbale navigation
   * @param object 
   * @param slideView 
   */
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  /**
   * Check if the slider is at the beginning
   * @param object 
   * @param slideView 
   */
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  /**
   * Check if the slider is at the end
   * @param object 
   * @param slideView 
   */
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
