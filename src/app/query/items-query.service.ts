import { Injectable } from '@angular/core';

interface ItemQuery {
  item: string;
  photosUrl: Array<string>;
  pricePerHour: number;
  totalUsagePrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsQueryService {

  constructor() { }
}
