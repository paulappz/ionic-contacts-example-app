import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { ContactPage } from '../contact/contact';
import { ToastController, LoadingController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts: any;
  allcontacts: any;

  constructor(private loadingController: LoadingController,private toastController: ToastController,private contactsProvider: ContactsProvider,public navCtrl: NavController) {

  }

  onContactClick(contact) {
    this.navCtrl.push(ContactPage,{'contact':contact});
  }

  ionViewDidLoad() {
    const loading = this.loadingController.create({
      content: 'Loading Contacts, Please wait...'
    });
    loading.present();

    this.contactsProvider.getContacts().subscribe((data) => {
      let responsecontacts = data["results"];
      this.contacts = this.addFavoriteProperty(responsecontacts);
      this.allcontacts = this.addFavoriteProperty(responsecontacts);
      loading.dismiss();
    });
  }

  private addFavoriteProperty(contacts) {
    contacts.forEach(function(contact){
      contact.isFavorite = false;
    });
    return contacts;
  }

  filterContacts(event) {
    let searchvalue = event.target.value;
    if(searchvalue && searchvalue !== "") {
      searchvalue = searchvalue.toLowerCase();
      this.contacts = this.allcontacts.filter((contact) => {
          let contactname = (`${contact.name.title} ${contact.name.first} ${contact.name.last}`).toLowerCase();
          return (contactname.indexOf(searchvalue) > -1);
      });
    } else {
      this.contacts = this.allcontacts;
    }
  }

  deleteContact(index) {
    this.contacts.splice(index,1);
    this.showToast('Contact has been deleted.');
  }

  private showToast(message: string) {
    let toast = this.toastController.create({
      'message': message,
      'duration': 2000
    });
    toast.present();
  }

  addToFavorite(contact, slidingitem) {
    this.contactsProvider.addToFavorite(contact);
    contact.isFavorite = true;
    slidingitem.close();
    this.showToast('Contact has been added to favorites.');
  }

}
