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
    // maybe some http get request
    const chair = this.firestore.collection('/items').doc('0NZoYnkYj3zyuSLOmb2d').get().subscribe(snapshot => {
      this.items.push(snapshot.data() as ItemQuery);
      return snapshot;
    });

    console.log(chair);

    // const desk: ItemQuery = {name: 'Desk', photos: [
    //   'https://www.ikea.com/in/en/images/products/micke-desk__0736019_PE740346_S5.JPG?f=xs',
    //   'https://www.ikea.com/in/en/images/products/micke-desk__0403166_PE565225_S5.JPG?f=xs',
    //   'https://www.ikea.com/in/en/images/products/micke-desk__0851577_PE660344_S5.JPG?f=xs',
    //   'https://www.ikea.com/in/en/images/products/micke-desk__0403462_PE565521_S5.JPG?f=xs'
    //   ],
    //   location: {
    //     'Exchange Residence',
    //     {
    //       49.0,
    //        -123.0,
    //       }},
    //   pricePerHour: 10.50
    // };

    // const tempItems = [desk, desk, desk, desk, desk, desk, desk];

    // this.items = tempItems;

  }

  getItems() {
    return this.items;
  }
}
