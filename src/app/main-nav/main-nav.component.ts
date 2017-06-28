import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { DataCatalog } from '../data-catalog';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Output() link: EventEmitter<string> = new EventEmitter();
  clikedLink: string;
  categories: string[] = [];

  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.getCategories();
  }

  linkCliked(e) {
    this.clikedLink = e.target.innerText;
    this.link.emit(this.clikedLink);
  }

  getCategories(){
    this.categories = this.dataService.getCategoriesNames();
  }
  
}
