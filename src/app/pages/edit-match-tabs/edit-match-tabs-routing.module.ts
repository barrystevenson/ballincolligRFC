import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMatchTabsPage } from './edit-match-tabs.page';


const routes: Routes = [
  {
    path: '',
    component: EditMatchTabsPage,
    children: [

      {
        path: 'edit-match-info/:id',
        children: [
         {
            path: '',
            loadChildren: '../edit-match-info/edit-match-info.module#EditMatchInfoPageModule'
          }
        ]
      },
      {
        path: 'edit-match-lineup/:id',
        children: [
          {
            path: '',
            loadChildren: '../edit-match-lineup/edit-match-lineup.module#EditMatchLineupPageModule'
          }
        ]
      },
       {
        path: 'edit-match-scorers/:id',
        children: [
          {
            path: '',
            loadChildren: '../edit-match-scorers/edit-match-scorers.module#EditMatchScorersPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/edit-match-tabs/edit-match-info/:id',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/edit-match-tabs/edit-match-info/:id',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMatchTabsPageRoutingModule {}
