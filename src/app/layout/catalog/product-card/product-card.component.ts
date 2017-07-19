import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() productName: string;
  @Input() imgGalleryUrls: string[];

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  showGallery() {
    this.isOpen = !this.isOpen;
  }

}
