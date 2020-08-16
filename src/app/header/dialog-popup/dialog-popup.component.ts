import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPopupComponent>) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
