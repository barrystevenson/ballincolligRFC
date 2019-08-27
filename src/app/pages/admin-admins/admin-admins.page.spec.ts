import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminsPage } from './admin-admins.page';

describe('AdminAdminsPage', () => {
  let component: AdminAdminsPage;
  let fixture: ComponentFixture<AdminAdminsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
