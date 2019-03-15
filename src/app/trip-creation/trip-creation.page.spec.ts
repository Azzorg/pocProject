import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCreationPage } from './trip-creation.page';

describe('TripCreationPage', () => {
  let component: TripCreationPage;
  let fixture: ComponentFixture<TripCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
