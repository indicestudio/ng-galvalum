import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	items = [
  {
    "name": "Tubo Galvanizado",
    "desc": null,
    "coverImgUrl": "assets/p1.jpg",
    "sliderImgUrl": [
      "assets/p1.jpg",
      "assets/p2.jpg",
      "assets/p3.jpg"
    ],
    "thick": "0.35mm",
    "sizes": [
      "1m",
      "5m"
    ],
    "dimension": [
      {
        "number": "1",
        "img": "assets/images/calefaccion/tg035/ilus/1.png"
      },
      {
        "number": "1/2",
        "img": "assets/images/calefaccion/tg035/ilus/2.png"
      }
    ]
  },
  {
    "name": "nombre del producto",
    "desc": "descripción del producto",
    "coverImgUrl": "url de la imagen del producto",
    "sliderImgUrl": [
      "url imagen 1",
      "url imagen 2",
      "url imagen 3"
    ],
    "thick": "espesor del producto",
    "sizes": [
      "1m",
      "2m"
    ],
    "dimension": [
      {
        "number": "texto con la medida el item",
        "img": "url de la imagen de la medida del item"
      },
      {
        "number": "texto 2 con la medida del item",
        "img": "url de la imagen con la medida del item"
      }
    ]
  }
];


  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
