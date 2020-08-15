import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: any[] = [];

  constructor(private firestore: AngularFirestore,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.items = this.itemsService.getItems();
    const item = this.route.snapshot.queryParams.item;
    const date = this.route.snapshot.queryParams.date;

    this.firestore.collection('items', (ref) => {
      return ref.where('name', '==', item);
    })
      .get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          this.items.push(doc);
        });
      });
  }

  ngOnDestroy() {
    this.items = [];
  }
}
