import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppComponent } from './footer-app.component';

describe('FooterAppPage', () => {
  let component: FooterAppComponent;
  let fixture: ComponentFixture<FooterAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAppComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
