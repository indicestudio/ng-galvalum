import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
@Component({
  selector: 'app-svg-marker',
  templateUrl: './svg-marker.component.html',
  styleUrls: ['./svg-marker.component.css']
})
export class SvgMarkerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
