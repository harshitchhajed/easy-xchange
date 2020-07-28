import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'easy-xchange';

  ngOnInit(): void {
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


  fbSubmitLogin(){
    FB.getLoginStatus((response: any) => {   // Called after the JS SDK has been initialized.
      this.statusChangeCallback(response);        // Returns the login status.
    });

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
      console.log('Successful login for: ' + response.name);
    });
  }
}