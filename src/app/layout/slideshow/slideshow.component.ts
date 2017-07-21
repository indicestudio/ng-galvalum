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
      'desc': 'Líderes en Aluminio y techumbres de Zinc-Alum. Sólo lo mejor para su hogar.'
    },
    {
      'imgUrl': './assets/slideshow/bg2.jpg',
      'title': 'Edifique su hogar con nosotros',
      'desc': 'Ofrecemos servicios B2B a pequeños empresarios, ¿quiere nuestros productos en su tienda, contáctenos.'
    },
    {
      'imgUrl': './assets/slideshow/bg3.jpg',
      'title': 'En aluminio, nadie nos supera.',
      'desc': '¿Tiene un proyecto de construcción? ¿Se desea preparar para este invierno? Confíe en Galva-Alum.'
    }
  ];

  constructor() {  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }




}
