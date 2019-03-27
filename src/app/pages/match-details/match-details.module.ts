import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatchDetailsPageRoutingModule } from './match-details.router.module';
import { MatchDetailsPage } from './match-details.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //MatchDetailsPageRoutingModule
    RouterModule.forChild(routes)     
  ],
  declarations: [MatchDetailsPage]
})
export class MatchDetailsPageModule {}


