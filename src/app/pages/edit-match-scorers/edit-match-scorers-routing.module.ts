import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMatchScorersPage } from './edit-match-scorers.page';

const routes: Routes = [
  {
    path: '',
    component: EditMatchScorersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMatchScorersPageRoutingModule {
}
