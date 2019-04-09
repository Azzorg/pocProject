import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesModalComponent } from './badges-modal.component';

describe('BadgesModalPage', () => {
  let component: BadgesModalComponent;
  let fixture: ComponentFixture<BadgesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
