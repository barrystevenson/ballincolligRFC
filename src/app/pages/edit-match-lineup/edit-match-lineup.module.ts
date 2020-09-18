import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditMatchLineupPage } from './edit-match-lineup.page';
import { EditMatchLineupPageRoutingModule } from './edit-match-lineup-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditMatchLineupPageRoutingModule
     //RouterModule.forChild([{ path: 'id', component: MatchDetailsInfoPage }])
  ],
  declarations: [EditMatchLineupPage]
})
export class EditMatchLineupPageModule {

}
