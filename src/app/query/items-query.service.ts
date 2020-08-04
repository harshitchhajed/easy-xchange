import { Injectable } from '@angular/core';

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

  constructor() { }

  // TODO: pass in queries like this. In future: server infers from the url
  getItemsFromServer(item: string, date: string) {
    // maybe some http get request
    const chair: ItemQuery = {item: 'Office Chair', photosUrl: [
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0724628_PE734561_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0723346_PE733927_S5.JPG?f=g',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0723347_PE733930_S5.JPG?f=g',
      'https://www.ikea.com/in/en/images/products/flintan-nominell-office-chair-with-armrests__0854761_PE563185_S5.JPG?f=g'
      ],
      location: 'Marine Drive Building',
      pricePerHour: 5.00
    };

    const desk: ItemQuery = {item: 'Desk', photosUrl: [
      'https://www.ikea.com/in/en/images/products/micke-desk__0736019_PE740346_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/micke-desk__0403166_PE565225_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/micke-desk__0851577_PE660344_S5.JPG?f=xs',
      'https://www.ikea.com/in/en/images/products/micke-desk__0403462_PE565521_S5.JPG?f=xs'
      ],
      location: 'Exchange Residence',
      pricePerHour: 10.50
    };

    const tempItems = [chair, desk, chair, desk, chair, desk, chair];

    this.items = tempItems;

  }

  getItems() {
    return this.items;
  }
}
