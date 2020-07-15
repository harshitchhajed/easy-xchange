import { Component, OnInit } from '@angular/core';
import { Tile } from './tile';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Habitat For Humanity', cols: 1, rows: 1, color: 'black', src: 'assets/donate-images/habitat-for-humanity-no-bg.png', link: 'https://www.habitatgv.ca/accepted-items'},
    {text: 'Big Brothers', cols: 2, rows: 1, color: 'black', src: 'assets/donate-images/big-brothers-no-bg.png', link: 'https://www.bigbrothersvancouver.com/clothing-donation/book-a-pick-up/'},
    {text: 'Still Fabulous', cols: 2, rows: 2, color: 'black', src: 'assets/donate-images/still-fabulous.png', link: 'http://www.stillfabulousthrift.com/donations/'},
    {text: 'Covenant House', cols: 3, rows: 2, color: 'black', src: 'assets/donate-images/covenant-house.png', link: 'https://www.covenanthousebc.org/ways-to-give/other-ways-to-give/donate-items/'},
    {text: 'Savers', cols: 2, rows: 1, color: 'black', src: 'assets/donate-images/savers.png', link: 'https://www.savers.com/donate/what-we-take'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
