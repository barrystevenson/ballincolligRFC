import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMatchLineupPage } from './edit-match-lineup.page';

const routes: Routes = [
  {
    path: '',
    component: EditMatchLineupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMatchLineupPageRoutingModule {
}
