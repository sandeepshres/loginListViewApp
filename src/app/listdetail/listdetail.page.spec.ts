import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailPage } from './listdetail.page';

describe('ListdetailPage', () => {
  let component: ListdetailPage;
  let fixture: ComponentFixture<ListdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
