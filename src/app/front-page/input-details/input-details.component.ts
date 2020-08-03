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

  constructor(private itemsService: ItemsQueryService, private homesService: HomesQueryService, private router: Router) { }

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
    // TODO: in future: will have to subscribe to query params if adding search bar on /items and /homes
    if (this.queryForm.valid) {

      if (this.selectedIndex === 0) {
        const date = new Date(Date.parse(this.queryForm.value.date));
        // console.log(date);
        this.router.navigate(['\items'], {queryParams: {
          item: this.queryForm.value.query,
          date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }});
        this.itemsService.getItemsFromServer('a', 'b');
      } else {
        const checkIn  = new Date(Date.parse(this.queryForm.value.checkIn));
        const checkOut = new Date(Date.parse(this.queryForm.value.checkOut));
        this.router.navigate(['\homes'], {queryParams: {
          item: this.queryForm.value.query,
          checkIn: `${checkIn.getFullYear()}-${checkIn.getMonth() + 1}-${checkIn.getDate()}`,
          checkOut: `${checkOut.getFullYear()}-${checkOut.getMonth() + 1}-${checkOut.getDate()}`
        }});
      }
    }
  }
}
