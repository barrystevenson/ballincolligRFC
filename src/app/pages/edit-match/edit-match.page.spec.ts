import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMatchPage } from './edit-match.page';

describe('EditMatchPage', () => {
  let component: EditMatchPage;
  let fixture: ComponentFixture<EditMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
