import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface ItemQuery {
  item: string;
  photosUrl: Array<string>;
  location: string;
  pricePerHour: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsQueryService {
  items: ItemQuery[];

  constructor(private firestore: AngularFirestore) { }

  // TODO: pass in queries like this. In future: server infers from the url
  getItemsFromServer(item: string, date: string) {
    // maybe some http get request
    const chair = this.firestore.collection('/items').doc('0NZoYnkYj3zyuSLOmb2d').get().subscribe(snapshot => {
      console.log(snapshot.data());
      return snapshot;
    });

    const desk: ItemQuery = {item: 'Desk', photosUrl: [
      'https://www.ikea.com/in/en/images/products/micke-desk__0736019_PE740346_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/micke-desk__0403166_PE565225_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/micke-desk__0851577_PE660344_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/micke-desk__0403462_PE565521_S5.JPG?f=xs'
      ],
      location: 'Exchange Residence',
      pricePerHour: 10.50
    };

    const tempItems = [desk, desk, desk, desk, desk, desk, desk];

    this.items = tempItems;

  }

  getItems() {
    return this.items;
  }
}
