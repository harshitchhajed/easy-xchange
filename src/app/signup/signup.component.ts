import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loggedIn: boolean;

  constructor() { }

  ngOnInit(): void {
   }

  signInWithGoogle(): void {

  }

  signInWithFB(): void {

  }

  signOut(): void {

  }

  statusChangeCallback(response: any) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      this.testAPI();
    } else {                                 // Not logged into your webpage or we are unable to tell.
      console.log('Log in failed');
    }
  }

  testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    // console.log('Welcome!  Fetching your information.... ');
    // FB.api('/me', (response: any) => {
    //   console.log(response);
    // });
  }

  onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    console.log('hello world');
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // The ID token you need to pass to your backend:
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
  }

}
