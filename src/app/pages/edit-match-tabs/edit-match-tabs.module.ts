import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMatchTabsPageRoutingModule } from './edit-match-tabs-routing.module';

import { EditMatchTabsPage } from './edit-match-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditMatchTabsPageRoutingModule
  ],
  declarations: [EditMatchTabsPage]
})
export class EditMatchTabsPageModule {}
