import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailsPage } from './match-details.page';


const routes: Routes = [
  {
    path: '',
    component: MatchDetailsPage,
    children: [

      {
        path: 'match-details-info/:id',
        children: [
         {
            path: '',
            loadChildren: '../match-details-info/match-details-info.module#MatchDetailsInfoPageModule'
          }
        ]
      },
      {
        path: 'match-details-lineup/:id',
        children: [
          {
            path: '',
            loadChildren: '../match-details-lineup/match-details-lineup.module#MatchDetailsLineupPageModule'
          }
        ]
      },
       {
        path: 'match-details-scorers/:id',
        children: [
          {
            path: '',
            loadChildren: '../match-details-scorers/match-details-scorers.module#MatchDetailsScorersPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/match-details/match-details-info/:id',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/match-details/match-details-info/:id',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchDetailsPageRoutingModule {}
