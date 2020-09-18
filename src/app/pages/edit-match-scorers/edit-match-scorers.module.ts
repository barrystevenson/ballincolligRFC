import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditMatchScorersPage } from './edit-match-scorers.page';
import { EditMatchScorersPageRoutingModule } from './edit-match-scorers-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditMatchScorersPageRoutingModule
     //RouterModule.forChild([{ path: 'id', component: MatchDetailsInfoPage }])
  ],
  declarations: [EditMatchScorersPage]
})
export class EditMatchScorersPageModule {

}
