import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgMarkerComponent } from './svg-marker/svg-marker.component';
import { ContactComponent } from './contact.component';
import { AgmCoreModule } from '@agm/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDjvzMytGO6RBccN3eb_i18UImohdZmMWQ'
        })  
      ],
      declarations: [ ContactComponent, SvgMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
