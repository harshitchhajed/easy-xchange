import { Injectable } from '@angular/core';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  FB = (window as any).FB;

  constructor() { }

  fbInit() {
    (window as any).fbAsyncInit = () => {
      this.FB.init({
        appId      : '635708387067929',
        cookie     : true,
        xfbml      : true,
        version    : 'v7.0'
      });

      this.FB.AppEvents.logPageView();
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
    console.log('submit login to facebook');
    this.FB.login();
  }
}
