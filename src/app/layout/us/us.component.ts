import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  borderWindow = 1920;
  svgCoordinates: string = '0,0 0,278 ' + this.borderWindow +',278 ' + this.borderWindow + ',272 587,272 587,197 562,197 562,186 604,186 548.896,131.051 493.945,186 536,186 536,197 511,197 511,272 346,272';
  svgColor = "#fff";
  constructor() { }

  ngOnInit() {
  }

}
