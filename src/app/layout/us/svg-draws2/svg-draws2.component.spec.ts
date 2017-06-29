import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDraws2Component } from './svg-draws2.component';

describe('SvgDraws2Component', () => {
  let component: SvgDraws2Component;
  let fixture: ComponentFixture<SvgDraws2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDraws2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDraws2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
