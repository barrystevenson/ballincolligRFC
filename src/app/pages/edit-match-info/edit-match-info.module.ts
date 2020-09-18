import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditMatchInfoPage } from './edit-match-info.page';
import { EditMatchInfoPageRoutingModule } from './edit-match-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditMatchInfoPageRoutingModule
     //RouterModule.forChild([{ path: 'id', component: MatchDetailsInfoPage }])
  ],
  declarations: [EditMatchInfoPage]
})
export class EditMatchInfoPageModule {

}
////
