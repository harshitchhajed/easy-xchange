import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SocialLoginService } from 'src/app/social-login.service';
declare var FB: any;

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPopupComponent>, public socialLogin: SocialLoginService) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
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

}
