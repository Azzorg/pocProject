import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trip-creation',
  templateUrl: './trip-creation.page.html',
  styleUrls: ['./trip-creation.page.scss'],
})
export class TripCreationPage implements OnInit {
  brightnessValue : number = 100;
  contrastValue : number = 100;
  saturationValue : number = 100;
  hueValue : number = 0;
  sepiaValue : number = 0;

  filters : string;
  
  @ViewChild('slideWithNav') slideWithNav: any;
  
  sliderImgs: any;
  
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 'auto',
    centeredSlides: false
  };

  urlImage: String;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getTripImages();
    this.urlImage = this.sliderImgs.slidesItems[0].image;
  }


  /**
   * Get all images saved for this trip to fill the slider
   */
  getTripImages(){
    this.sliderImgs =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          image: 'https://media.deseretdigital.com/file/fdd8867843'
        },
        {
          image: 'https://www.myutahparks.com/.image/t_share/MTQ4MzM1NjgyNTMwNTE4Nzcy/bryce-amphitheater-inspiration-point_dp_680.jpg'
        },
        {
          image: 'https://cdn-image.travelandleisure.com/sites/default/files/1461787471/bryce-canyon-midday-NP0416.jpg'
        },
        {
          image: 'https://thumbor.thedailymeal.com/7xRgFvtkSfDB83Uimvk-XpvK7eY=/774x516/https://www.theactivetimes.com/sites/default/files/uploads/m/main-shutterstock_241738303.jpg'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg/1200px-USA_10654_Bryce_Canyon_Luca_Galuzzi_2007.jpg'
        },
        {
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

  getFilters(){
    let filterText: string = "brightness(" + this.brightnessValue + "%) contrast(" + this.contrastValue + "%) saturate(" + this.saturationValue + "%) hue-rotate(" + this.hueValue + "deg) sepia(" + this.sepiaValue + "%)";
    return this.sanitizer.bypassSecurityTrustStyle(filterText);
  }
  
  
  ////////////////////////////// FOR IMAGES CHOICE SLIDER FUNCTIONNEMENT
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
  slideDidChange(object, slideView) {
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
