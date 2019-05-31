import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatchDetailsStandardPage } from './match-details-standard.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsStandardPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)     
  ],
  declarations: [MatchDetailsStandardPage]
})
export class MatchDetailsStandardPageModule {}


