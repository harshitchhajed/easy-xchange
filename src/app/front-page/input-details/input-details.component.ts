import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {
  @Input() selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedIndex);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
