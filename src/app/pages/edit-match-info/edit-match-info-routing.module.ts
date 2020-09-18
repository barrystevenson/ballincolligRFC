import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMatchInfoPage } from './edit-match-info.page';

const routes: Routes = [
  {
    path: '',
    component: EditMatchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMatchInfoPageRoutingModule {
}
