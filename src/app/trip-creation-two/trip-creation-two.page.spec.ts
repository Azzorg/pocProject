import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCreationTwoPage } from './trip-creation-two.page';

describe('TripCreationTwoPage', () => {
  let component: TripCreationTwoPage;
  let fixture: ComponentFixture<TripCreationTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreationTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCreationTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
