import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HomesQueryService } from './../../query/homes-query.service';
import { ItemsQueryService } from './../../query/items-query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {
  @Input() selectedIndex: number;
  queryForm: FormGroup;

  constructor(private items: ItemsQueryService, private homes: HomesQueryService, private router: Router) { }

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

  // TODO: add better filters for check in and check out
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

  onSearch() {
    console.log(this.queryForm);
    if (this.queryForm.valid) {
      this.router.navigate(['\items'], {queryParams: {item: this.queryForm.value.query, date: this.queryForm.value.date}});
    }
  }
}
