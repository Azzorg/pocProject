import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppPage } from './footer-app.page';

describe('FooterAppPage', () => {
  let component: FooterAppPage;
  let fixture: ComponentFixture<FooterAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
