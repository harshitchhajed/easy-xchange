import { Component, OnInit, Input } from '@angular/core';
import { ItemQuery } from '../../item-query';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: ItemQuery;
  staticMapsUrl: string;
  // TODO: remove api key from front-end
  key = '';

  mapShown = false;

  constructor() { }

  ngOnInit(): void {

    this.staticMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=University+of+British+Columbia,Vancouver,BC
      &zoom=13
      &size=320x400
      &maptype=roadmap
      &markers=color:red%7C${this.item.location.locationGeopoint.latitude},${this.item.location.locationGeopoint.longitude}
      &key=${this.key}`;
   }
}
