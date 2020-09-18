import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMatchScorersPage } from './edit-match-scorers.page';

describe('EditMatchScorersPage', () => {
  let component: EditMatchScorersPage;
  let fixture: ComponentFixture<EditMatchScorersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatchScorersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMatchScorersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
