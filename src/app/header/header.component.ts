import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayOnFrontPage = false;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.displayOnFrontPage = (event as NavigationStart).url === '/';
      }
    });
  }

  // openSignUp() {
  //   // used to open a dialog box for signup. not used for time being
  //   const dialogRef = this.dialog.open(DialogPopupComponent, {
  //     width: '30vw',
  //     hasBackdrop: true,
  //     height: '80vh',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
