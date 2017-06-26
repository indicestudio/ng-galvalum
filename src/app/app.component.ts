import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  link: string = 'Calefacción';

  constructor() {
  }

  currentLink(e) {
    this.link = e;
    console.log(this.link);
  }
}
