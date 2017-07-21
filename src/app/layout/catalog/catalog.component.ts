import { DataCatalog, Categories, Products } from './../../shared/data-catalog.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({opacity: 0}))
          ])
        ]),
        query(':enter', [
          style({opacity: 1}),
          stagger(100, [
            animate('0.5s', style({opacity: 1}))
          ])
        ])
      ])
    ])
  ]
})
export class CatalogComponent implements OnInit, OnChanges {

  @Input() currentCategory;
  filteredByCat: Products[];

  constructor(private dataService: DataService) {
  }

  getData(): void {
    this.dataService.getData().then(data => {
      return data[0].categorias.filter((cat) => {
        return cat.nombre === this.currentCategory;
      });
    }).then((myData) => {
      myData.forEach((p) => {
        this.filteredByCat = p.productos;
      });
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges() {
    this.getData();
  }

}
