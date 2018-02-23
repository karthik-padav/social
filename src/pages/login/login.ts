import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
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
              public DataService: DataServiceProvider,
              private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  facebookLogin(){
    this.facebook.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => {
    console.log('Logged into Facebook!', res);
    this.facebook.api('me?fields=id,name,gender,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
      this.userData = {
        email: profile['email'],
        name: profile['name'],
        picture: profile['picture_large'['data']['url']],
        userName: profile['name'],
        gender: profile['gender']
      }
      console.log(this.userData);
    })
  })
  .catch(e => console.log('Error logging into Facebook', e));
  }

  logout(){
    
  }

}
