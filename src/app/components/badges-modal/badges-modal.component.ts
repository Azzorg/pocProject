import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-badges-modal',
  templateUrl: './badges-modal.component.html',
  styleUrls: ['./badges-modal.component.scss'],
  animations: [
    trigger('hideShowInfo', [
      state('true', style({ 
        height: '0px',
        padding: '0px'
      })),
      state('false', style({ 
        height: '*',
        padding: '16px' 
      })),
      transition('false <=> true', animate(200))
    ]),


    // // Supposed to animate the height change of badge description
    
    
    // trigger('animateHeightChange', [
    //   state('*', style({ 
    //     height: '*'
    //   })),
    //   state('false', style({ 
    //     height: '*',
    //     // background:'red'
    //   })),
    //   transition('* <=> *', animate(300))
    // ])
  ]
})
export class BadgesModalComponent implements OnInit {

  // "badge" passed in componentProps
  @Input() badge: any;

  listBadge: any;
  listGottenBadges: any;
  listInProgressBadges : any;

  hideInfoBadge: boolean = false;
  showEarnedBadges: boolean = true;

  hideShowInfo: boolean;

  state: boolean = true;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.getListBadges();
    this.generateListsBadges();

    if(!this.badge){
      console.log("No badge selected");
      this.hideInfoBadge = true;

      this.hideShowInfo = true;
    }
    else{
      this.hideShowInfo = false;
    }
  }


  /**
   * To dismiss the modal
   */
  dismiss(){
    this.modalCtrl.dismiss();
  }


  /**
   * Generate lists of badges (gotten and in progress) from list Badges
   */
  generateListsBadges(){
    this.listGottenBadges = new Array();
    this.listInProgressBadges = new Array();
    for(let i = 0; i < this.listBadge.length; i++){
      if(this.listBadge[i].gotten){
        this.listGottenBadges.push(this.listBadge[i]);
      }
      else{
        this.listInProgressBadges.push(this.listBadge[i]);
      }
    }
  }



  /**
   * Show info of the badge selected
   */
  showInfoBadge(badgeShown){
    if(this.badge && badgeShown.id === this.badge.id && !this.hideInfoBadge){
      this.hideInfoBadge = true; 
      this.hideShowInfo = true;
    }
    else{
      this.hideInfoBadge = false; 
      this.hideShowInfo = false;
      this.badge = badgeShown;

      // To animate the height change of badge description
      this.state = !this.state;
    }

    console.log("State : " + this.state);
  }



  /**
   * Go to in progress badges list : "swiping" on left
   */
  goToInProgressBadgesList(){
    this.showEarnedBadges = false;
  }


  /**
   * Go to earned badges list : "swiping" on right
   */
  goToEarnedBadgesList(){
    this.showEarnedBadges = true;
  }


  /**
   * get the list of badges
   */
  getListBadges(){
    console.log("In getListBadge");
    this.listBadge = [
      {
        id: 1,
        name: "Jeune Baroudeur",
        gotten: true,
        badge:"./../../assets/icon/badges/diamand.svg",
        description:"Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis."
      },
      {
        id: 2,
        name: "Jeune Explorateur",
        gotten: false,
        badge:"./../../assets/icon/badges/star.svg",
        description:"Plus exemplis generalibus nocitura quam delictis."
      },
      {
        id: 3,
        name:"Grand Routeur",
        gotten: true,
        badge:"./../../assets/icon/badges/gift.svg",
        description:"Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inpositae in urbem advectae sunt per Catonem, nunc repetetur ordo gestorum."
      },
      {
        id: 4,
        name:"Voyageur de L'Extrême",
        gotten: true,
        badge:"./../../assets/icon/badges/pouce.svg",
        description:"Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia, tandem id ut optimum factu elegit: et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur."
      },
      {
        id: 5,
        name:"Ecolo voyageur",
        gotten: true,
        badge:"./../../assets/icon/badges/green-certification.svg",
        description:"Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia, tandem id ut optimum factu elegit: et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur."
      },
      {
        id: 6,
        name:"No stress",
        gotten: false,
        badge:"./../../assets/icon/badges/sticker.svg",
        description:"Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia, tandem id ut optimum factu elegit: et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur."
      },
      {
        id: 7,
        name:"No stress",
        gotten: true,
        badge:"./../../assets/icon/badges/sticker.svg",
        description:"Et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur."
      },
      {
        id: 8,
        name:"Petit Routeur",
        gotten: true,
        badge:"./../../assets/icon/badges/gift.svg",
        description:"Classi inpositae in urbem advectae sunt per Catonem, nunc repetetur ordo gestorum."
      },
      {
        id: 9,
        name:"Super écolo",
        gotten: false,
        badge:"./../../assets/icon/badges/green-certification.svg",
        description:"Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia, tandem id ut optimum factu elegit: et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur."
      }
    ];
  }

}
