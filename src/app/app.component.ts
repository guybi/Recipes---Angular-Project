import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: String = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyANVItXHg81xreYNOSKBWgnqhv7ETT1h_o",
      authDomain: "recipes-guy.firebaseapp.com",
    });
  }
}
