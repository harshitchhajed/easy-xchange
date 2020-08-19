import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, Event, NavigationStart } from '@angular/router';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
import { LoggedUserService } from '../logged-user.service';
import { DialogAccountComponent } from './dialog-account/dialog-account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayOnFrontPage = false;

  constructor(public dialog: MatDialog,
              private router: Router,
              public loggedUser: LoggedUserService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.displayOnFrontPage = (event as NavigationStart).url === '/';
      }
    });
  }

  openSignIn() {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '30vw',
      hasBackdrop: true,
      height: '50vh',
      panelClass: 'rounder-dialog',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  openAccountInfo() {
    const dialogRef = this.dialog.open(DialogAccountComponent, {
      width: '30vw',
      hasBackdrop: true,
      height: '55vh',
      panelClass: 'rounder-dialog',
    });
  }
}
