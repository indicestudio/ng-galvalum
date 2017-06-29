import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  map: boolean = false;
  lat: number = -36.6079269;
  lng: number = -72.1222256;
  zoom: number = 16;
  defaultMapUI = false;

  overlayIndex: string;

  mapTxt: string = 'Ver Mapa';
  
  constructor() { }

  ngOnInit() {
  }

  showMap() {
    this.map = !this.map;
    this.overlayIndex = this.overlayIndex === '10' ? '0' : '10';
    this.mapTxt = this.mapTxt === 'Cerrar Mapa' ? 'Ver Mapa' : 'Cerrar Mapa';
  }

}
