import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminHomeTabsPageRoutingModule } from './admin-home-tabs.router.module';

import { AdminHomeTabsPage } from './admin-home-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdminHomeTabsPageRoutingModule
  ],
  declarations: [AdminHomeTabsPage]
})
export class AdminHomeTabsPageModule {}


