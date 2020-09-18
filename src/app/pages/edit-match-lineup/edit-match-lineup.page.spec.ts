import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMatchLineupPage } from './edit-match-lineup.page';

describe('EditMatchLineupPage', () => {
  let component: EditMatchLineupPage;
  let fixture: ComponentFixture<EditMatchLineupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatchLineupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMatchLineupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
