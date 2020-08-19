import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {
  @Input() docData: any;
  displayDeposit: boolean;
  dateGroup: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayDeposit = this.docData.money.deposit != null || this.docData.money.deposit !== 0;
    this.dateGroup = new FormGroup({
      date: new FormControl({
        value: new Date().toISOString(),
        disabled: true
      })
    });
  }

}
