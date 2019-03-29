import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  backgroundImgUrl : string = "./../../assets/img/background-image.jpg";

  user : any;
  listBadge: any;
  nbKms: number = 11520;
  nbPays: number = 4;
  nbVoyages : number = 6;
  


  constructor() { }

  ngOnInit() {
    this.getVisitingProfil();
    this.getListBadges();
  }

  /**
   * 
   */
  getVisitingProfil(){
    this.user = {
      pseudo: "Azzorg",
      image: "https://majorblog.com/wp-content/uploads/2016/11/silhouette-of-man-looking-away.jpg",
      nbAbonnes: 152
    };
  }

  getListBadges(){
    this.listBadge = [
      {
        name: "Jeune baroudeur",
        gotten: true,
        badge:"./../../assets/icon/badges/diamand.svg",
        description:"Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare inciperemus eum, quem aliquando odisse possemus. Quin etiam si minus felices in diligendo fuissemus, ferendum id Scipio potius quam inimicitiarum tempus cogitandum putabat."
      },
      {
        name: "Jeune explorateur",
        gotten: false,
        badge:"./../../assets/icon/badges/star.svg",
        description:"Dum apud Persas, ut supra narravimus, perfidia regis motus agitat insperatos, et in eois tractibus bella rediviva consurgunt, anno sexto decimo et eo diutius post Nepotiani exitium, saeviens per urbem aeternam urebat cuncta Bellona, ex primordiis minimis ad clades excita luctuosas, quas obliterasset utinam iuge silentium! ne forte paria quandoque temptentur, plus exemplis generalibus nocitura quam delictis."
      },
      {
        name:"Grand routeur",
        gotten: true,
        badge:"./../../assets/icon/badges/gift.svg",
        description:"Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inpositae in urbem advectae sunt per Catonem, nunc repetetur ordo gestorum."
      },
      {
        name:"Voyageur de l'extrême",
        gotten: true,
        badge:"./../../assets/icon/badges/pouce.svg",
        description:"Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia, tandem id ut optimum factu elegit: et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur."
      }
    ];
  }

}
