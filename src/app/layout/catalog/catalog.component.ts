import { DataCatalog, Categories, Products } from './../../shared/data-catalog.model';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../shared/data-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [DataService]
})
export class CatalogComponent implements OnInit {

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

}
