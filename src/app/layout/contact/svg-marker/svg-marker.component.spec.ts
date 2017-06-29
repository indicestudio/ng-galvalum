import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMarkerComponent } from './svg-marker.component';

describe('SvgMarkerComponent', () => {
  let component: SvgMarkerComponent;
  let fixture: ComponentFixture<SvgMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
