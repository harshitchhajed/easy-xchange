import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-detailed-item',
  templateUrl: './detailed-item.component.html',
  styleUrls: ['./detailed-item.component.css']
})
export class DetailedItemComponent implements OnInit {
  docID: string;
  docData: any;

  constructor(private route: ActivatedRoute,
              private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.docID = this.route.snapshot.params.docID;

    this.firestore.doc(`/items/${this.docID}`)
      .get().subscribe(snapshot => {
        if (snapshot.exists) {
          this.docData = snapshot.data();
          console.log(this.docData);
        } else {
          console.log('404');
        }
      });
  }

}
