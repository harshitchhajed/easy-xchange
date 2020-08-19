import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;
  itemData: any;
  itemID: any;
  staticMapsUrl: any;
  key = 'AIzaSyDzQbg9aIKeeRnzzm7dTkXXjHdhSHNO068';

  mapShown = false;

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.itemData = this.item.data();
    this.itemID = this.item.id;

    this.staticMapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=${this.key}&q=Space+Needle,Seattle+WA`);
  }

  onSeeMore() {
    this.router.navigate(['/items', this.itemID], {queryParamsHandling: 'preserve'});
  }


}
