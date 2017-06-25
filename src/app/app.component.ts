import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  link: string = 'inicio';

  constructor() {
  }

  currentLink(e) {
    this.link = e;
    console.log(this.link);
  }
}
