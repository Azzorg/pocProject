import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCreationThreePage } from './trip-creation-three.page';

describe('TripCreationThreePage', () => {
  let component: TripCreationThreePage;
  let fixture: ComponentFixture<TripCreationThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreationThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreationThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
