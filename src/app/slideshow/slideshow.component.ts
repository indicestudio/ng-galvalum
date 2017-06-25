import { Component, OnInit, ViewChild } from '@angular/core';
import { Slide } from '../slide';

import { Observable } from 'rxjs/Rx'

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @ViewChild('thisSlide') currentSlide;
  slideState: boolean;

  slides: Slide[] = [
    {
      'imgUrl': 'assets/bg1.jpg',
      'title': 'First Slide',
      'desc': 'This is my description'
    },
    {
      'imgUrl': 'assets/bg2.jpg',
      'title': 'Second Slide',
      'desc': 'This is my description'
    },
    {
      'imgUrl': 'assets/bg3.jpg',
      'title': 'Third Slide',
      'desc': 'This is my description'
    }
  ];


  constructor() {}

  ngOnInit(){}



}
