import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDrawsComponent } from './svg-draws.component';

describe('SvgDrawsComponent', () => {
  let component: SvgDrawsComponent;
  let fixture: ComponentFixture<SvgDrawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDrawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
