import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-window',
  templateUrl: './date-window.component.html',
  styleUrls: ['./date-window.component.css']
})
export class DateWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: add better filters for check in and check out
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

}
