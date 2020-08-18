import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { LoggedUserService } from './../../logged-user.service';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  loggedIn: boolean;
  providers = AuthProvider;

  constructor(public socialAuth: AngularFireAuth,
              public dialogRef: MatDialogRef<DialogPopupComponent>,
              private loggedUser: LoggedUserService) { }

  ngOnInit(): void { }

  signInWithGoogle(): void {
    this.socialAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signInWithFB(): void {
    this.socialAuth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  signOut(): void {
    this.socialAuth.signOut()
    .then(() => {
      console.log('user signed out');
    });
  }

  loginSuccess(user: User) {
    this.loggedUser.setUser(user);
    this.dialogRef.close();
    console.log(user);
  }

  loginError(error: any) {
    console.log(error);
  }
}
