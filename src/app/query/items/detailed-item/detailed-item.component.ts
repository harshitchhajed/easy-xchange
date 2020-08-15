import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-item',
  templateUrl: './detailed-item.component.html',
  styleUrls: ['./detailed-item.component.css']
})
export class DetailedItemComponent implements OnInit {
  docID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.docID = this.route.snapshot.params.docID;
  }

}
