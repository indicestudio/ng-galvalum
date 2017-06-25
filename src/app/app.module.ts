import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Services
import { DataService } from './data.service';

// ngx-bootstrap imports //
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//Custom Components
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { UsComponent } from './us/us.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CatalogComponent,
    MainNavComponent,
    SlideshowComponent,
    UsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    //ngx-bootstrap modules
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
