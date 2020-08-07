import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemQuery } from './item-query';

@Injectable({
  providedIn: 'root'
})
export class ItemsQueryService {
  items: ItemQuery[] = [];

  constructor(private firestore: AngularFirestore) { }

  // TODO: pass in queries like this. In future: server infers from the url
  getItemsFromServer(item: string, date: string) {

    this.firestore.collection('/items').doc('0NZoYnkYj3zyuSLOmb2d').get().subscribe(snapshot => {
      this.items.push(snapshot.data()  as ItemQuery);
    });
  }

  getItems() {
    return this.items;
  }
}
