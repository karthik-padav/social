import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service/data-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public DataService: DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp(){
    console.log(this.userData);
    this.DataService.signUp(this.userData).subscribe(user => {
      console.log(user);
    })

  }

  facebookLogin(){
    
  }

}
