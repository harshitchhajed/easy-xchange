import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-account',
  templateUrl: './dialog-account.component.html',
  styleUrls: ['./dialog-account.component.css']
})
export class DialogAccountComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogAccountComponent>) { }

  ngOnInit(): void {
  }

  onSignOutOrDelete() {
    this.dialogRef.close();
  }

}
