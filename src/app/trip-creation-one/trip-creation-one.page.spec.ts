import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCreationOnePage } from './trip-creation-one.page';

describe('TripCreationOnePage', () => {
  let component: TripCreationOnePage;
  let fixture: ComponentFixture<TripCreationOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreationOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreationOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
