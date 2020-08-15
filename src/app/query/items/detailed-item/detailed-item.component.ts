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
  photos: any[] = [];

  constructor(private route: ActivatedRoute,
              private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.docID = this.route.snapshot.params.docID;

    this.firestore.doc(`/items/${this.docID}`)
      .get().subscribe(snapshot => {
        if (snapshot.exists) {
          this.docData = snapshot.data();
          console.log(this.docData);
          this.initPhotos();
        } else {
          console.log('404');
        }
      });


  }

  initPhotos() {

    for (let i = 0; i < this.docData.photos.length; i++) {
      const photoSrc = this.docData.photos[i];
      this.photos.push({
        src: photoSrc,
        cols: (i === 0 ? 2 : 1),
        rows: (i === 0 ? 4 : 2),
      });
    }

    while (this.photos.length < 5) {
      this.photos.push({
        src: 'assets/fake-bg.png',
        cols: 1,
        rows: 2,
      });
    }

    this.photos = this.photos.slice(0, 5);

  }

}
