import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesModalPage } from './badges-modal.page';

describe('BadgesModalPage', () => {
  let component: BadgesModalPage;
  let fixture: ComponentFixture<BadgesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
