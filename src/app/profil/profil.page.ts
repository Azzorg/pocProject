import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BadgesModalComponent } from './../components/badges-modal/badges-modal.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  backgroundImgUrl : string = "./../../assets/img/background-image.jpg";

  user : any;
  listBadge: any;
  listTrips: any;
  nbKms: number = 11520;
  nbPays: number = 4;
  nbVoyages : number = 6;
  hidden: boolean = true;
  mapMode: boolean = false;

  


  constructor(public modalController: ModalController) { }


  ngOnInit() {
    this.getVisitingProfil();
    this.getListBadges();
    this.getAllUserTrips();
  }


  /**
   * get profil information
   */
  getVisitingProfil(){
    this.user = {
      pseudo: "Azzorg",
      image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
      nbAbonnes: 152
    };
  }


  /**
   * get the list of badges
   */
  getListBadges(){
    this.listBadge = [
      {
        id: 1,
        name: "Jeune Baroudeur",
        gotten: true,
        badge:"./../../assets/icon/badges/diamand.svg",
        description:"Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis."
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
        id: 2,
        name: "Jeune Explorateur",
        gotten: false,
        badge:"./../../assets/icon/badges/star.svg",
        description:"Dum apud Persas, ut supra narravimus, perfidia regis motus agitat insperatos, et in eois tractibus bella rediviva consurgunt, anno sexto decimo et eo diutius post Nepotiani exitium, saeviens per urbem aeternam urebat cuncta Bellona, ex primordiis minimis ad clades excita luctuosas, quas obliterasset utinam iuge silentium! ne forte paria quandoque temptentur, plus exemplis generalibus nocitura quam delictis."
      }
    ];
  }

  getAllUserTrips(){
    this.listTrips = [
      {
        name: "Road Trip USA",
        image: "http://www.lerepairedesmotards.com/img/voyages/etats-unis/colorado_hd.jpg",
        paysImage: "./../../assets/countries/usa.png",
        dateDebut: "01/10/2018",
        dateFin: ""
      },
      {
        name: "Toronto",
        image: "https://torontosavvy.files.wordpress.com/2015/03/toronto_by_neom.jpg",
        paysImage: "https://cdn.countryflags.com/thumbs/canada/flag-button-round-250.png",
        dateDebut: "24/12/2017",
        dateFin: "02/01/2018"
      },
      {
        name: "Saint Jean de Monts",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/02/1e/dd/93/la-foret-de-pins.jpg",
        paysImage: "./../../assets/countries/france.png",
        dateDebut: "20/07/2017",
        dateFin: "30/07/2017"
      },
      {
        name: "Chez Tibo",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/08/b0/2b/0f/le-sentier-du-littoral.jpg",
        paysImage: "./../../assets/countries/france.png",
        dateDebut: "23/08/2016",
        dateFin: "31/08/2016"
      },
      {
        name: "Humanitaire au Bangladesh",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/16/5e/59/rangamati-hanging-bridge.jpg",
        paysImage: "https://cdn3.iconfinder.com/data/icons/50-flags-of-the-world-circular-shape-1/60/Circular_world_Flag_55-512.png",
        dateDebut: "10/02/2012",
        dateFin: "23/02/2012"
      },
      {
        name: "Voyage scolaire Copenhague",
        image: "https://www.govoyages.com/blog/wp-content/uploads/sites/14/2018/10/deux-jours-copenhague-720.jpg",
        paysImage: "https://banner2.kisspng.com/20180608/hyl/kisspng-flag-of-denmark-flag-of-luxembourg-danish-flag-of-5b1a099f7c96f4.4275827715284330555103.jpg",
        dateDebut: "05/05/2011",
        dateFin: "18/05/2011"
      }
    ]
  }


  /**
   * display a modal with info of the badge
   * @param badge 
   */
  async showInfoBadge(badge?){
    console.log("Show info badge", badge);
    const modal = await this.modalController.create({
      component: BadgesModalComponent,
      componentProps: {
        'badge': badge
      }
    });
    return await modal.present();
  }
  

  /**
   * Go to the trip page
   * @param trip 
   */
  goToTrip(trip : any){
    console.log("Trip : " + trip.name, trip);
  }

  
  /**
   * return
   * @param trip 
   */
  getDates(trip: any){
    if(trip.dateFin === ""){
      return "En cours";
    }
    return trip.dateDebut + " - " + trip.dateFin
  }
}
