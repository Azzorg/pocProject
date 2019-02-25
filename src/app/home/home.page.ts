import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * test
   */
  public test(isLeft:boolean) {
    if(isLeft)
      console.log("Throwout left");
    else 
      console.log("Throwout right")
  }

}
