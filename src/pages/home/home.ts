import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { EventDetailsPage } from '../../pages/event-details/event-details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private app: App) {

  }

  showEventDetails(){
    console.log('show event details');
    // this.navCtrl.push(EventDetailsPage);
    this.app.getRootNav().push(EventDetailsPage);
  }

  likeDislike(event){
    console.log('like or dislike');
    console.log(event);
    event.stopPropagation();
  }

}
