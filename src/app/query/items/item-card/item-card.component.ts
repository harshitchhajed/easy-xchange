import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;
  staticMapsUrl: any;
  // TODO: remove api key from front-end
  key = 'AIzaSyDzQbg9aIKeeRnzzm7dTkXXjHdhSHNO068';

  mapShown = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.item.photos = ['https://firebasestorage.googleapis.com/v0/b/easy-xchange.appspot.com/o/0WQuhqBjTdqqj9IssN2g%2F0?alt=media&token=f7c8eb8f-2497-487c-a0c4-39b1fe78e1ca',
    'https://firebasestorage.googleapis.com/v0/b/easy-xchange.appspot.com/o/0WQuhqBjTdqqj9IssN2g%2F0?alt=media&token=f7c8eb8f-2497-487c-a0c4-39b1fe78e1ca'
    ];

  //   this.staticMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=University+of+British+Columbia,Vancouver,BC
  //     &zoom=13
  //     &size=320x400
  //     &maptype=roadmap
  //     &markers=color:red%7C${this.item.location.locationGeopoint.latitude},${this.item.location.locationGeopoint.longitude}
  //     &key=${this.key}`;
  //  }

    this.staticMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=${this.key}&q=Space+Needle,Seattle+WA`);

  }
}
