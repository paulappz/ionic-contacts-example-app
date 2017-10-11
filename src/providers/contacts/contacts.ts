import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  private favoritecontacts;

  constructor(public http: Http) {
    this.favoritecontacts = [];
  }

  getContacts() {

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('results',"50");

    let requestOptions = new RequestOptions({'params': urlSearchParams});

    return this.http.get('https://randomuser.me/api/', requestOptions)
    .map(response => response.json());
  }

  addToFavorite(contact) {
      this.favoritecontacts.push(contact);
  }

}
