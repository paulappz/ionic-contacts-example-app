import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number'
import { EmailComposer } from '@ionic-native/email-composer'

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contact: any;

  constructor(private emailComposer: EmailComposer,private callNumber: CallNumber,public navCtrl: NavController, public navParams: NavParams) {
    this.contact = navParams.get("contact");
  }

  ionViewDidLoad() {

  }

  callContact() {
    this.callNumber.callNumber(this.contact.phone, true);
  }

  mailContact() {
    let email = {
      to: this.contact.email,
    };

    this.emailComposer.open(email);
  }

  shareContact() {
    
  }

}
