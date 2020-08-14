import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemQuery } from './item-query';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsQueryService {
  items: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  // TODO: pass in queries like this. In future: server infers from the url
  getItemsFromServer(item: string, date: string) {

    // this.firestore.collection('/items').doc('0NZoYnkYj3zyuSLOmb2d').get().subscribe(snapshot => {
    //   this.items.push(snapshot.data()  as ItemQuery);
    // });
    const serverItems = [];
    this.firestore.collection('items', (ref) => {
      return ref.where('name', '==', item);
    })
      .get()
      // .pipe(
      //   // finalize(() => this.items = serverItems)
      // )
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          this.items.push(doc.data());
          console.log(this.items);
        });
      });
  }

  getItems() {
    return this.items;
  }
}
