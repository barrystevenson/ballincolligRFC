import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchReportPage } from './match-report.page';

describe('MatchReportPage', () => {
  let component: MatchReportPage;
  let fixture: ComponentFixture<MatchReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
