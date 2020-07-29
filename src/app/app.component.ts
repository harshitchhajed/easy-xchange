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
    // (window as any).fbAsyncInit = () => {
    //   FB.init({
    //     appId      : '635708387067929',
    //     cookie     : true,
    //     xfbml      : true,
    //     version    : 'v7.0',
    //   });

    //   FB.AppEvents.logPageView();

    // };

    // ((d, s, id) => {
    //   // tslint:disable-next-line: one-variable-per-declaration
    //   let js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {return; }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = 'https://connect.facebook.net/en_US/sdk.js';
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, 'script', 'facebook-jssdk');

  }
}
