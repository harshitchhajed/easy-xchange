import { ItemQuery } from './../items-query.service';
import { Component, OnInit } from '@angular/core';
import { ItemsQueryService } from '../items-query.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: ItemQuery[];

  constructor(private itemsService: ItemsQueryService) { }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

}
