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
  staticMapsUrl: string;
  lat = '49.2614434';
  long = '-123.2588847';
  // TODO: remove api key from front-end
  key = '';
  mapShown = false;

  constructor(private itemsService: ItemsQueryService) { }

  ngOnInit(): void {
    // const items = this.itemsService.getItems();
    this.pics = [
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0724628_PE734561_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0723346_PE733927_S5.JPG?f=g',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0723347_PE733930_S5.JPG?f=g',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0854761_PE563185_S5.JPG?f=g'
    ];

    this.itemName = 'Office Chair';

    this.staticMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=University+of+British+Columbia,Vancouver,BC
      &zoom=13
      &size=320x400
      &maptype=roadmap
      &markers=color:red%7C${this.lat},${this.long}
      &key=${this.key}`;
   }
}
