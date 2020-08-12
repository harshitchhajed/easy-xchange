import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-window',
  templateUrl: './date-window.component.html',
  styleUrls: ['./date-window.component.css']
})
export class DateWindowComponent implements OnInit {
  datesFormGroup: FormGroup;
  startDate: Date = null;
  endDate: Date = null;

  constructor() { }

  ngOnInit(): void {
    this.datesFormGroup = new FormGroup({
      startDate: new FormControl('', this.validateStartDate.bind(this)),
      endDate: new FormControl('', this.validateEndDate.bind(this))
    });
  }

  // TODO: add better filters for start and end
  startFilter(d: Date | null) {
    const date = (d || new Date());
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let threeMonthsFuture: Date;
    if (now.getMonth() + 3 > 12) {
      threeMonthsFuture = new Date(now.getFullYear() + 1, now.getMonth() + 3 - 12, now.getDate());
    } else {
      threeMonthsFuture = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
    }

    return (date <= threeMonthsFuture) && (date >= today);
  }

  endFilter(d: Date | null) {
    const date = (d || new Date());
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let threeMonthsFuture: Date;
    if (now.getMonth() + 3 > 12) {
      threeMonthsFuture = new Date(now.getFullYear() + 1, now.getMonth() + 3 - 12, now.getDate());
    } else {
      threeMonthsFuture = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
    }

    return (date <= threeMonthsFuture) && (date >= today);
  }

  onDateChange(type: string, event: MatDatepickerInputEvent<Date>) {
    if (type === 'start') {
      this.startDate = event.value;
    } else {
      this.endDate = event.value;
    }

  }

  validateStartDate(control: FormControl): {[s: string]: boolean} {
    if (this.endDate == null || control.value > this.endDate) {
      return {invalidDates: true};
    }
    return null;
  }

  validateEndDate(control: FormControl): {[s: string]: boolean} {
    if (this.startDate == null || this.startDate > control.value) {
      return {invalidDates: true};
    }
    return null;
  }

}
