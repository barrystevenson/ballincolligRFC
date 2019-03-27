import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailsPage } from './match-details.page';

const routes: Routes = [
  {
    path: 'match-details/:id',
    //  path: '',
    component: MatchDetailsPage,
    children: [
      {
        path: 'match-report',
        children: [
          {
            path: '',
            loadChildren: '../match-report/match-report.module#MatchReportPageModule'
          }
        ]
      },
      {
        path: 'team-lineup',
        children: [
          {
            path: '',
            loadChildren: '../team-lineup/team-lineup.module#TeamLineupPageModule'
          }
        ]
      },
      {
        path: '',
        //redirectTo: '/match-details/match-report',
        redirectTo: '/match-details/:id/match-report',
        pathMatch: 'full'
      }
    ]
  },
   {
    path: 'match-details/:id',
    //redirectTo: '/match-details/:id',
    redirectTo: '/match-details/:id/match-report',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchDetailsPageRoutingModule {}
