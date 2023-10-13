import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private platform: Platform) { }

  ngOnInit() {
  }

  cameraEnter() {
    this.router.navigate(['camera']);
  }

  contactsEnter() {
    this.router.navigate(['contacts']);
  }

  exitApp() {
    App.exitApp;
  }

}
