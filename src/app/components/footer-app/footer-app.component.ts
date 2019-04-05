import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss'],
})
export class FooterAppComponent implements OnInit {
  showOptions: boolean = false;

  constructor() { }

  ngOnInit() {}

  /**
   * Show or hide adding options
   */
  toggleAddOptions(){
    this.showOptions = !this.showOptions;
  }

}
