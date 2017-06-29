import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsComponent } from './us.component';
import { SvgDrawsComponent } from './svg-draws/svg-draws.component';
import { SvgDraws2Component } from './svg-draws2/svg-draws2.component';


describe('UsComponent', () => {
  let component: UsComponent;
  let fixture: ComponentFixture<UsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsComponent,SvgDraws2Component, SvgDrawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
