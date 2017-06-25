import { Injectable } from '@angular/core';
import { DataCatalog } from './data-catalog';

@Injectable()
export class DataService {

  constructor() { }

  categories: string[] = [];

  data: DataCatalog[] = [
    {
      categoria: 'Calefacción',
      nombre: 'Anillo Galvanizado',
      imgUrl: 'assets/calefaccion/anillogal/01.jpg',
      dimensiones: ['1', '1/2', '1/4'],
      galeria: [
        '/assets/calefaccion/anillogal/01.jpg',
        '/assets/calefaccion/anillogal/02.jpg'
      ]
    },
    {
      categoria: 'Casa y Jardín',
      nombre: 'Anillo Galvanizado',
      imgUrl: '/assets/calefaccion/anillogal/01.jpg',
      dimensiones: ['1', '1/2', '1/4'],
      galeria: [
        '/assets/calefaccion/anillogal/01.jpg',
        '/assets/calefaccion/anillogal/02.jpg'
      ]
    },
  ];

  getCategories() {

    this.data.forEach((x) => {
      this.categories.push(x.categoria);
    });

    return this.categories;
  }

}
