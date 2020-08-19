import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-message-popup',
  templateUrl: './send-message-popup.component.html',
  styleUrls: ['./send-message-popup.component.css']
})
export class SendMessagePopupComponent implements OnInit {
  email: string;

  constructor(public dialogRef: MatDialogRef<SendMessagePopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.email = `mailto:${this.data.email}`;
  }

}
