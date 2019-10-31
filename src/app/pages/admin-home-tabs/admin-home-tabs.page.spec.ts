import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeTabsPage } from './admin-home-tabs.page';

describe('AdminHomeTabsPage', () => {
  let component: AdminHomeTabsPage;
  let fixture: ComponentFixture<AdminHomeTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


