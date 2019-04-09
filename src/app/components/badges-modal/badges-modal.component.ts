import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-badges-modal',
  templateUrl: './badges-modal.component.html',
  styleUrls: ['./badges-modal.component.scss'],
})
export class BadgesModalComponent implements OnInit {

    // "badge" passed in componentProps
    @Input() badge: any;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  /**
   * To dismiss the modal
   */
  dismiss(){
    this.modalCtrl.dismiss();
  }

}
