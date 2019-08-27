import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminFixturesPage } from './admin-fixtures.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AdminFixturesPage }])
  ],
  declarations: [AdminFixturesPage]
})
export class AdminFixturesPageModule {}

