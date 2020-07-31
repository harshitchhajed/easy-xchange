import { Injectable } from '@angular/core';

interface HomeQuery {
  homeTitle: string;
  photosUrl: Array<string>;
  pricePerDay: number;
  totalStayPrice: number;
}


@Injectable({
  providedIn: 'root'
})
export class HomesQueryService {

  constructor() { }
}
