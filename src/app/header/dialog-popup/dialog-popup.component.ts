import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  loggedIn: boolean;
  providers = AuthProvider;

  constructor(public socialAuth: AngularFireAuth,
              public dialogRef: MatDialogRef<DialogPopupComponent>) { }

  ngOnInit(): void { }

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
      // handle errors like no sign in, account already exists
    });
  }

  signOut(): void {
    this.socialAuth.signOut()
    .then(() => {
      console.log('user signed out');
    });
  }

  loginSuccess(user: User) {
    this.dialogRef.close();
    console.log(user);
  }

  loginError(error: any) {
    console.log(error);
  }
}
