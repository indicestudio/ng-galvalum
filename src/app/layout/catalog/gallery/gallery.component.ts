import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        state('*', style({
          transform: 'translateX(0)',
          opacity: 1
        })),
        state('void', style({
          transform: 'translateX(100%)',
          opacity: 0
        })),
        transition('* => void', animate('500ms ease-out')),
        transition('void => *', animate('500ms ease-in'))
      ]
    )
  ]
})
export class GalleryComponent implements OnInit {

  @Input() galImgUrls: string[];
  // tslint:disable-next-line:no-output-rename
  @Output('close') closeEmitter: EventEmitter<string> = new EventEmitter();
  index = 0;

  constructor() { }

  ngOnInit() {
  }

  closeGallery() {
    this.closeEmitter.emit('closed');
  }

  nextImage() {
    if (this.index < this.galImgUrls.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

}
