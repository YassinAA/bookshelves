import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyCnihOVq8RdCcdO4wFKYplJZ89D915Usdw",
      authDomain: "bookshelves-d9e7c.firebaseapp.com",
      databaseURL: "https://bookshelves-d9e7c.firebaseio.com",
      projectId: "bookshelves-d9e7c",
      storageBucket: "bookshelves-d9e7c.appspot.com",
      messagingSenderId: "845280672158"
    };
    firebase.initializeApp(config);
  }
}
