import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EditMatchTabsPage } from './edit-match-tabs.page';

describe('EditMatchTabsPage', () => {
  let component: EditMatchTabsPage;
  let fixture: ComponentFixture<EditMatchTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatchTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMatchTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
