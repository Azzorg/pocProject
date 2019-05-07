import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-trip-creation-one',
  templateUrl: './trip-creation-one.page.html',
  styleUrls: ['./trip-creation-one.page.scss'],
})
export class TripCreationOnePage implements OnInit {

  // Variables from model
  tripName: string;
  startDate: Date;
  endDate: Date;
  visibility: string;
  recit: string;


  constructor() { }

  ngOnInit() {
  }


  /**
   * Next click action to the second page of trip creation 
   */
  goNext(){
    console.log("Go to the second page to create a new trip");
    console.log("Nom du voyage : " + this.tripName);
    console.log("Date de début du voyage : " + this.startDate);
    console.log("date de fin du voyage : " + this.endDate);
    console.log("Visibilité du voyage : " + this.visibility);
    console.log("Récit du voyage : " + this.recit);
  }


  /**
   * Return to the 
   */
  cancelButton(){
    console.log("Click on cancel button");
  }

}
