import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {
  items = [];
  loaded = false;

  constructor(private firestore: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    // this.items = this.itemsService.getItems();
    let item = this.route.snapshot.queryParams.item;
    let date = this.interpretDateFromURL(this.route.snapshot.queryParams.date).toLocaleDateString();
    this.route.queryParams.subscribe((params: Params) => {
      item = params.item;
      date = params.date;
      this.fetchItems(item, date);
    });

    this.fetchItems(item, date);
  }

  ngOnDestroy() {
    this.items = [];
  }

  fetchItems(item: string, date: string) {
    if (item === 'all') {
      this.firestore.collection('items')
        .get()
        .subscribe(snapshot => {
          snapshot.forEach(doc => {
            this.items.push(doc);
          });
          this.loaded = true;
        });
    } else {
      this.firestore.collection('items', (ref) => {
        return ref.where('name', '==', item);
      })
        .get()
        .subscribe(snapshot => {
          snapshot.forEach(doc => {
            this.items.push(doc);
          });
          this.loaded = true;
        });
    }
  }

  interpretDateFromURL(url: string) {

    const dates = url.split('-');
    console.log(dates);
    try {
      if (dates.length !== 3) {
        throw new Error('Incorrect dates length');
      }
      return new Date(+dates[0], +dates[1] - 1, +dates[2]);
    } catch (error) {
      console.log(404);
      console.log(error);
      // add 404 routing
    }
  }

  searchAll() {
    this.router.navigate(['/items'], {
      queryParams: {item: 'all'},
      queryParamsHandling: 'merge'
    });
  }
}
