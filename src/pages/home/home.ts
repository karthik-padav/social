import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { EventDetailsPage } from '../../pages/event-details/event-details';
import { AddEventPage } from '../../pages/add-event/add-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  liked:boolean=false
  constructor(public navCtrl: NavController,
              private app: App) {

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  showEventDetails(){
    console.log('show event details');
    // this.navCtrl.push(EventDetailsPage);
    this.app.getRootNav().push(EventDetailsPage);
  }

  goToAddEvent(){
    this.app.getRootNav().push(AddEventPage);
  }

  likeDislike(liked){
    this.liked = !this.liked;
  }

}
