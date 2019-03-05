import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropPage } from './backdrop.page';

describe('BackdropPage', () => {
  let component: BackdropPage;
  let fixture: ComponentFixture<BackdropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
