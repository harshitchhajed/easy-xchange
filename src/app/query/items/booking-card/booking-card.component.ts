import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {
  @Input() docData: any;
  displayDeposit: boolean;
  dateGroup: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const searchDate = this.interpretDateFromURL().toISOString();

    this.displayDeposit = this.docData.money.deposit != null || this.docData.money.deposit !== 0;
    this.dateGroup = new FormGroup({
      date: new FormControl({
        value: searchDate,
        disabled: true
      })
    });
  }

  interpretDateFromURL() {

    const dates = this.route.snapshot.queryParams.date.split('-');
    console.log(dates);
    try {
      return new Date(+dates[0], +dates[1] - 1, +dates[2]);
    } catch (error) {
      console.log(404);
      // add 404 routing
    }
  }

}
