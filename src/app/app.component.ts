import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link = 'Inicio';

  constructor() {
  }

  currentLink(e) {
    this.link = e;
  }
}
