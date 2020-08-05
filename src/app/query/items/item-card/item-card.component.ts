import { Component, OnInit, Input } from '@angular/core';
import { ItemQuery } from '../../item-query';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: ItemQuery;
  pics: string[];
  itemName: string;
  staticMapsUrl: string;
  lat = '49.2614434';
  long = '-123.2588847';
  // TODO: remove api key from front-end
  key = '';
  mapShown = false;

  constructor() { }

  ngOnInit(): void {
    // const items = this.itemsService.getItems();
    this.pics = this.item.photos;

    this.itemName = this.item.name;

    this.staticMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=University+of+British+Columbia,Vancouver,BC
      &zoom=13
      &size=320x400
      &maptype=roadmap
      &markers=color:red%7C${this.item.location.locationGeopoint.latitude},${this.item.location.locationGeopoint.longitude}
      &key=${this.key}`;
   }
}
