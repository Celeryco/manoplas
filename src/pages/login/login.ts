import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth-provider';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public login: {username?: '', password?: ''} = {};
public submitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onLogin(form: NgForm){
  	this.submitted = true;

  	if (form.valid) {
  		this.authProvider.login(this.login).subscribe(
  			(data) => {
  				if (data.user) {
  					this.authProvider.isLoggedIn = true;
  					localStorage.setItem('user', JSON.stringify(data.user));
  					this.navCtrl.push('AuthTabs');
  				}else{
  					console.log('Error de login');
  				}
			})
  		}
	}
}
