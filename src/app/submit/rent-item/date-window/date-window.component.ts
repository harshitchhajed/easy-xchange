import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-window',
  templateUrl: './date-window.component.html',
  styleUrls: ['./date-window.component.css']
})
export class DateWindowComponent implements OnInit {
  datesFormGroup: FormGroup;
  @Output() validity = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datesFormGroup = new FormGroup({
      startDate: new FormControl(null),
      endDate: new FormControl(null)
    }, this.validateDates.bind(this));
  }

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

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.validity.emit({
      validity:  this.datesFormGroup.valid,
      startDate: this.datesFormGroup.controls.startDate.value,
      endDate:   this.datesFormGroup.controls.endDate.value
    });
  }

  validateDates(group: FormGroup): {[s: string]: boolean} {
    if (group.controls.startDate.value == null && group.controls.endDate.value == null) {
      return null;
    }
    if (group.controls.startDate.value == null || group.controls.endDate.value == null) {
      return {oneDateMissing: true};
    }
    if (group.controls.startDate.value > group.controls.endDate.value) {
      return {invalidDates: true};
    }
    return null;
  }
}
