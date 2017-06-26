import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataCatalog } from '../data-catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: DataCatalog[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().then(products => {
      this.products = products
    });
  }

}
