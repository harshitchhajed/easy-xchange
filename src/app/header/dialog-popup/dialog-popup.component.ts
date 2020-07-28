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

  ngOnInit(): void {
    // this.socialLogin.fbInit();
    console.log('got here');
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId      : '635708387067929',
        cookie     : true,
        xfbml      : true,
        version    : 'v7.0'
      });

      FB.AppEvents.logPageView();
    };

    ((d, s, id) => {
      // tslint:disable-next-line: one-variable-per-declaration
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fbSubmitLogin() {
    // this.socialLogin.fbSubmitLogin();
    console.log('submit login to facebook');
    FB.login();
  }

}
