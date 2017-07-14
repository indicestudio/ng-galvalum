import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slide } from '../../shared/slide.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {

  // Slide Data
  slides: Slide[] = [
    {
      'imgUrl': './assets/slideshow/bg1.jpg',
      'title': 'Somos Galva-Alum',
      'desc': 'Líderes en Aluminio y techumbres de Zinc-Alum'
    },
    {
      'imgUrl': './assets/slideshow/bg2.jpg',
      'title': 'Second Slide',
      'desc': 'This is my description'
    },
    {
      'imgUrl': './assets/slideshow/bg3.jpg',
      'title': 'Third Slide',
      'desc': 'This is my description'
    }
  ];

  constructor() {  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }




}
