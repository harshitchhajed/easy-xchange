import { Component, OnInit } from '@angular/core';
import { ItemsQueryService } from '../../items-query.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  pics: string[];
  itemName: string;

  constructor(private itemsService: ItemsQueryService) { }

  ngOnInit(): void {
    // const items = this.itemsService.getItems();
    this.pics = [
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0724628_PE734561_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0723346_PE733927_S5.JPG?f=g',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0723347_PE733930_S5.JPG?f=g',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0854761_PE563185_S5.JPG?f=g'
    ],
    this.itemName = 'Office Chair';
   }

}
