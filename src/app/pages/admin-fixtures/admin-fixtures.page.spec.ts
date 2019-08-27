import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFixturesPage } from './admin-fixtures.page';

describe('AdminFixturesPage', () => {
  let component: AdminFixturesPage;
  let fixture: ComponentFixture<AdminFixturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFixturesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFixturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
