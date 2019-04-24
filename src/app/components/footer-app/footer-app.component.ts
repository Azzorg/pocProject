import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss'],
})
export class FooterAppComponent implements OnInit {
  showOptions: boolean = false;
  justOpen: boolean = false;

  constructor() { }

  ngOnInit() {}

  /**
   * Show or hide adding options
   */
  toggleAddOptions(){
    this.showOptions = !this.showOptions;
    this.justOpen = true;
  }

  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.showOptions && !this.justOpen){
      this.showOptions = false;
    }
    else{
      this.justOpen = false;
    }
  }

}
