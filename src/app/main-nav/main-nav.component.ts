import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Output() link: EventEmitter<string> = new EventEmitter();
  clikedLink: string;

  constructor(private dataService: DataService) { }

  categories: string[];

  ngOnInit() {
    this.categories = this.dataService.getCategories();
  }

  linkCliked(e) {
    this.clikedLink = e.target.innerText;
    this.link.emit(this.clikedLink);
  }
  
}
