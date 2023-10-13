import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contact, ContactField, ContactName, Contacts } from '@ionic-native/contacts/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  myContacts: Contact[] = [];

  constructor(private contacts: Contacts, private callNumber: CallNumber, private sms: SMS, private toastCtrl: ToastController) { }

  loadContacts() {
    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };

    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
    });
  }

  createContacts() {
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName('null', 'Nome', 'Nome1');
    contact.phoneNumbers = [ new ContactField('mobile', '12345678') ];
    contact.save().then(
      async () => {
        let toast = await this.toastCtrl.create({
          message: 'Contato adicionado!'
        });
      }
    )
  }

  ngOnInit() {
  }

}
