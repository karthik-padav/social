import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  userLogout() {
    this.facebook.logout().then((res: FacebookLoginResponse) => {
      console.log('Logged out from Facebook!', res);

      var navOptions = {
        animation: 'ios-transition'
      };
      this.navCtrl.setRoot(LoginPage, null, navOptions);
    })
      .catch(e => console.log('Error logging out', e));
  };

}
