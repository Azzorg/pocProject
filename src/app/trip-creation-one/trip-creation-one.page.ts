import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  listTravelers: any;


  constructor(public alertController: AlertController) { }

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


  /**
   * Dispaly 
   */
  async addNewParticipants(){
    const alert = await this.alertController.create({
      header: 'Ajouter un participant',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username',
          type: 'search'
        }
      ],
      message: 'Rechercher un participant',
      buttons: ['Annuler', 'Ajouter']
    });

    await alert.present();
  }

}
