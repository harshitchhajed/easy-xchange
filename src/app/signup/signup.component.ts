import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
declare var FB: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  fbSubmitLogin(){
    // FB.getLoginStatus((response: any) => {   // Called after the JS SDK has been initialized.
    //   this.statusChangeCallback(response);        // Returns the login status.
    // });

    console.log('submit login to facebook');

    FB.login((response: any) => {
      console.log(response);
      this.statusChangeCallback(response);
    }, {scope: 'public_profile,email'});
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
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', (response: any) => {
      console.log(response);
    });
  }

  fbLogout() {
    FB.logout((response: any) => {
      console.log('you were logged out');
   });
  }

  onSignIn(googleUser: any) {
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
