import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  animations: [
    trigger('sliderAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({
          opacity: 1
        }))
      ]),
      transition('* => void', [
        animate('0ms', style({
          opacity: 0
      }))
      ])
    ])
  ]
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: string[];
  @Input() name: string;
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
