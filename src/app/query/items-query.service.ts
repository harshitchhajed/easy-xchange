import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemsQueryService {
  items = [];

  constructor(private firestore: AngularFirestore) { }

  // TODO: pass in queries like this. In future: front-end infers from the url
  getItemsFromServer(item: string, date: string) {

    const serverItems = [];
    this.firestore.collection('items', (ref) => {
      return ref.where('name', '==', item);
    })
      .get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
          this.items.push(doc);
          console.log(this.items);
        });
      });
  }

  getItems() {
    return this.items;
  }
}
