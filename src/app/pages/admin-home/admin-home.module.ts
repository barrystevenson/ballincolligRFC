import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminHomePageRoutingModule } from './admin-home.router.module';

import { AdminHomePage } from './admin-home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdminHomePageRoutingModule
  ],
  declarations: [AdminHomePage]
})
export class AdminHomePageModule {}


