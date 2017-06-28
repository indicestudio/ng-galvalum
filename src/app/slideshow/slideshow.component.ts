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
        opacity: '0',
        transform: 'translateX(100%)'
      })),
      state('active', style({
        opacity: '1',
        transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('2000ms ease-in-out'))
    ]),
    trigger('captionState', [
      state('inactive', style({
        opacity: '0',
        transform: 'translateY(-100%)'
      })),
      state('active', style({
        opacity: '1',
        transform: 'translate(-50%, -50%)'
      })),
      transition('inactive <=> active', animate('2000ms ease-in-out'))     
    ])
  ]
})
export class SlideshowComponent implements OnInit {

  // Slide Data
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
  
  timeBetweenSlides: number = 4000;
  slideTranslateX: number = 0;

  constructor() {}

  ngOnInit() {
    this.startSlides();
  }

  startSlides() {
    if (this.slideTranslateX === (this.slides.length - 1) * -100) {
      this.slideTranslateX = 0;
    }
    setTimeout(()=>{
      this.slideState = 'active';
      setTimeout(()=>{
        this.slideTranslateX -= 100;
        setTimeout(()=>{
          this.startSlides();
        },this.timeBetweenSlides);
      }, this.timeBetweenSlides);
    }, 450);
  }



/*
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
  */





}
