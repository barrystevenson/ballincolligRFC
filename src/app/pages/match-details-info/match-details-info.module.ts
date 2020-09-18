import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchDetailsInfoPage } from './match-details-info.page';
import { MatchDetailsInfoPageRoutingModule } from './match-details-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatchDetailsInfoPageRoutingModule
     //RouterModule.forChild([{ path: 'id', component: MatchDetailsInfoPage }])
  ],
  declarations: [MatchDetailsInfoPage]
})
export class MatchDetailsInfoPageModule {

}
