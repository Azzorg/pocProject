import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public showAllNotifs : boolean = false;

  constructor(){

  }

  public changeStateNotifs(){
    console.log("change state notifs");
    this.showAllNotifs = !this.showAllNotifs;
    document.getElementById("content-list").scrollTop = 0;
  }
}
