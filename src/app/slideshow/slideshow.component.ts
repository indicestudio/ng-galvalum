import { Component, OnInit } from '@angular/core';
import { Slide } from '../slide';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('slideState', [
      state('inactive', style({
        opacity: '0.5'
      })),
      state('active', style({
        opacity: '1'
      })),
      transition('inactive <=> active', animate('4000ms ease-in-out'))
    ])
  ]
})
export class SlideshowComponent implements OnInit {

  slides: Slide[] = [
    {
      'imgUrl': '/assets/slideshow/bg1.jpg',
      'title': 'Somos Galva-Alum',
      'desc': 'Líderes en Aluminio y techumbres de Zinc-Alum'
    },
    {
      'imgUrl': '/assets/slideshow/bg2.jpg',
      'title': 'Second Slide',
      'desc': 'This is my description'
    },
    {
      'imgUrl': '/assets/slideshow/bg3.jpg',
      'title': 'Third Slide',
      'desc': 'This is my description'
    }
  ];

  slideIndex: number = 0;
  slideState: string = 'inactive';
  constructor() {}
  slideTime: number = 4000;

  ngOnInit() {
    let timer = setTimeout(() => {
      this.changeSlideState();
    }, 500)
  }

  changeSlideState(){
    this.slideState = 'active';
    let timer = setTimeout(() => {
      this.slideState = 'inactive';
      this.changeSlide();
    }, this.slideTime);
  }

  changeSlide(){
    let timer = setTimeout(() => {
      this.slideIndex++;
      if (this.slideIndex > 2) {
        this.slideIndex = 0;
      }
      this.changeSlideState();
    }, this.slideTime);
  }



}
