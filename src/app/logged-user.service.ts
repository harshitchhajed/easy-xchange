import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User, auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  currUser: User;

  constructor(private firestore: AngularFirestore) { }

  getUser() {
    return auth().currentUser;
  }

  setUser(user: User) {
    this.currUser = user;
  }
}
