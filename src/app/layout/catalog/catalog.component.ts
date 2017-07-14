import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service.service';
import { DataCatalog } from '../../shared/data-catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [DataService]
})
export class CatalogComponent implements OnInit {

  data: DataCatalog[];

  constructor(private dataService: DataService) {
  }

  getData(): void {
    this.dataService.getData().then(d => this.data = d);
  }

  ngOnInit(): void {
    this.getData();
  }

}
