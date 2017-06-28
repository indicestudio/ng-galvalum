import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataCatalog } from '../data-catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  data: DataCatalog[];

  constructor(private dataService: DataService) {
  }

  getData():void {
    this.dataService.getData().then(d => this.data = d);
  }

  ngOnInit():void {
    this.getData();
  }




}
