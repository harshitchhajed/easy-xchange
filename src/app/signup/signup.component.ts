import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loggedIn: boolean;

  constructor(public socialAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    this.socialAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(result => {
      console.log(result.user.displayName);
    });
  }

  signInWithFB(): void {
    this.socialAuth.signInWithPopup(new auth.FacebookAuthProvider())
    .then(result => {
      console.log(result.user.displayName);
    })
    .catch(reason => {
      console.log('account already exists');
    });
  }

  signOut(): void {
    this.socialAuth.signOut()
    .then(() => {
      console.log('user signed out');
    });
  }
}
