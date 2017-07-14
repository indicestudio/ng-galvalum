import { DataCatalog, Categories } from './../../shared/data-catalog.model';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../shared/data-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [DataService]
})
export class CatalogComponent implements OnInit {

  data: DataCatalog[];
  @Input() currentCategory;

  constructor(private dataService: DataService) {
  }

  getData(): void {
    this.dataService.getData().then(d => this.data = d);
  }

  ngOnInit(): void {
    this.getData();
  }

}
