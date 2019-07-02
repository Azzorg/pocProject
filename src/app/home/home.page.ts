import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public showAllNotifs : boolean = false;
  public lstTrips : Array<any> = [
    {
      title: 'Voyage au Yosemite',
      created_date: Date.now(),
      start_date: Date.now(),
      end_date: Date.now(),
      imageVoyage: "url('../../assets/img/yosemite.jpg')",
      notation : 4,
      countLikes : 134,
      confidentiality : "public",
      countries : ["usa"],
      lstPosts : [
        {
          userName : 'Dimitri',
          userPicture : 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          date : new Date('2019-06-29T03:24:00'),
          type : 'new_photos',
          elt : '',
          complementary : '8',
          likesCount : 15,
          commentsCount : 3
        },
        {
          userName : 'Vlad72',
          userPicture : 'https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
          date : new Date('2019-06-22T03:24:00'),
          type : 'new_step',
          elt : '',
          complementary : 'Yosemite Nord',
          likesCount : 10,
          commentsCount : 2
        },
        {
          userName : 'Micky',
          userPicture : 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          date : new Date('2019-06-12T03:24:00'),
          type : 'new_trip',
          elt : '',
          likesCount : 43,
          commentsCount : 19
        }
      ]
    },
    {
      title: 'New York',
      created_date: Date.now(),
      start_date: Date.now(),
      end_date: Date.now(),
      imageVoyage: "url('../../assets/img/nyc.JPG')",
      notation : 4.2,
      countLikes : 134,
      confidentiality : "public",
      countries : ["usa"],
      lstPosts : [
        {
          userName : 'Gerold',
          userPicture : 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          date : new Date('2019-06-29T03:24:00'),
          type : 'new_photos',
          elt : '',
          complementary : '8',
          likesCount : 15,
          commentsCount : 3
        },
        {
          userName : 'Vlad72',
          userPicture : 'https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
          date : new Date('2019-06-22T03:24:00'),
          type : 'new_step',
          elt : '',
          complementary : 'Yosemite Nord',
          likesCount : 15,
          commentsCount : 3
        },
        {
          userName : 'Micky',
          userPicture : 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          date : new Date('2019-06-12T03:24:00'),
          type : 'new_trip',
          elt : '',
          likesCount : 15,
          commentsCount : 3
        },
        {
          userName : 'Micky',
          userPicture : 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          date : new Date('2019-06-12T03:24:00'),
          type : 'new_trip',
          elt : '',
          likesCount : 15,
          commentsCount : 3
        },
        {
          userName : 'Micky',
          userPicture : 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          date : new Date('2019-06-12T03:24:00'),
          type : 'new_trip',
          elt : '',
          likesCount : 15,
          commentsCount : 3
        }
      ]
    },
    {
      title: 'Road Trip USA 2018',
      created_date: Date.now(),
      start_date: Date.now(),
      end_date: Date.now(),
      imageVoyage: "url('../../assets/img/yocemite1.jpg')",
      notation : 4,
      countLikes : 134,
      confidentiality : "public",
      countries : ["usa"],
      lstPosts : [
        {
          userName : 'Dimitri',
          userPicture : 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          date : new Date('2019-06-29T03:24:00'),
          type : 'new_photos',
          elt : '',
          complementary : '8',
          likesCount : 15,
          commentsCount : 3
        },
        {
          userName : 'Vlad72',
          userPicture : 'https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
          date : new Date('2019-06-22T03:24:00'),
          type : 'new_step',
          elt : '',
          complementary : 'Yosemite Nord',
          likesCount : 10,
          commentsCount : 2
        },
        {
          userName : 'Micky',
          userPicture : 'https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          date : new Date('2019-06-12T03:24:00'),
          type : 'new_trip',
          elt : '',
          likesCount : 43,
          commentsCount : 19
        }
      ]
    }
  ];

  constructor(){

  }

  public changeStateNotifs(){
    console.log("change state notifs");
    this.showAllNotifs = !this.showAllNotifs;
    document.getElementById("content-list").scrollTop = 0;
  }

  public dateFromNow(date) : string {
    var diff = new Date().getTime() - date.getTime();
    return (diff/1000/60/60/24).toFixed(0);
  }
}
