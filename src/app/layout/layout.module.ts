import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DataService } from '../shared/data-service.service';

import { MainNavComponent } from './main-nav/main-nav.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

import { CatalogComponent } from './catalog/catalog.component';
import { ProductCardComponent } from './catalog/product-card/product-card.component';

import { ContactComponent } from './contact/contact.component';
import { SvgMarkerComponent } from './contact/svg-marker/svg-marker.component';


import { UsComponent } from './us/us.component';
import { SvgDrawsComponent } from './us/svg-draws/svg-draws.component';
import { SvgDraws2Component } from './us/svg-draws2/svg-draws2.component';
import { GalleryComponent } from './catalog/gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjvzMytGO6RBccN3eb_i18UImohdZmMWQ'
    }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    MainNavComponent,
    SlideshowComponent,
    CatalogComponent,
    ProductCardComponent,
    ContactComponent,
    SvgMarkerComponent,
    UsComponent,
    SvgDrawsComponent,
    SvgDraws2Component,
    GalleryComponent,
  ],
  exports: [
    MainNavComponent,
    SlideshowComponent,
    CatalogComponent,
    ProductCardComponent,
    ContactComponent,
    SvgMarkerComponent,
    UsComponent,
    SvgDrawsComponent,
    SvgDraws2Component,
    GalleryComponent
  ],
  providers: [DataService]
})
export class LayoutModule { }
