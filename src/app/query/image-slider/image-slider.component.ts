import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  animations: [
    trigger('sliderAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.75)' }),
        animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({
          opacity: 1,
          transform: 'scale(1)'
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
    this.preloadImages();
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  preloadImages() {
    for (const url of this.slides) {
      new Image().src = url;
    }
  }

}
