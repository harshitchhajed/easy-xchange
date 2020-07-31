import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {
  @Input() selectedIndex: number;
  queryForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.queryForm = new FormGroup({
      query: new FormControl(null, Validators.required),
      date: new FormControl(new Date().toISOString()),
      checkIn: new FormControl(),
      checkOut: new FormControl(null)
    });
  }

  dateFilter = (d: Date | null): boolean => {
    const date = (d || new Date());
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return date >= today;
  }

  checkInFilter(d: Date | null) {
    const date = (d || new Date());
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return date >= today;
  }

  checkOutFilter(d: Date | null) {
    const date = (d || new Date());
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return date >= today;
  }

  onSubmit() {
    console.log(this.queryForm);
  }
}
