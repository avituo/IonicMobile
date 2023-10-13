import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Camera', url: '/folder/camera', icon: 'camera'},
    { title: 'Contacts', url: '/folder/contacts', icon: 'mail' },
  ];
  constructor() {}
}
