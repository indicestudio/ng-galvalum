import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Angular Maps
import { AgmCoreModule } from '@agm/core';

//Services
import { DataService } from './data.service';

// ngx-bootstrap imports //
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//Custom Components
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { UsComponent } from './us/us.component';
import { SvgDrawsComponent } from './us/svg-draws/svg-draws.component';
import { SvgDraws2Component } from './us/svg-draws2/svg-draws2.component';
import { ContactComponent } from './contact/contact.component';
import { SvgMarkerComponent } from './contact/svg-marker/svg-marker.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CatalogComponent,
    MainNavComponent,
    SlideshowComponent,
    UsComponent,
    SvgDrawsComponent,
    SvgDraws2Component,
    ContactComponent,
    SvgMarkerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    //ngx-bootstrap modules
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    //Angular Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6OZKtZj9QdXcISNEcKww-zAI7z1k6aQ0'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
