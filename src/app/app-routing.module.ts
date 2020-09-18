import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'match-details', loadChildren: './pages/match-details/match-details.module#MatchDetailsPageModule' },
  { path: 'match-details-standard/:id', loadChildren: './pages/match-details-standard/match-details-standard.module#MatchDetailsStandardPageModule' },
  { path: 'player-details/:id', loadChildren: './pages/player-details/player-details.module#PlayerDetailsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'admin-home-tabs, loadChildren: './pages/admin-home-tabs/admin-home-tabs.module#AdminHomeTabsPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'admin-home', loadChildren: './pages/admin-home/admin-home.module#AdminHomePageModule', canActivate: [AuthGuard]  },
  { path: 'new-match', loadChildren: './pages/new-match/new-match.module#NewMatchPageModule', canActivate: [AuthGuard]  },
  { path: 'match-details', loadChildren: './pages/match-details/match-details.module#MatchDetailsPageModule' },
  { path: 'edit-match-tabs', loadChildren: './pages/edit-match-tabs/edit-match-tabs.module#EditMatchTabsPageModule', canActivate: [AuthGuard] },
  { path: 'edit-match/:id', loadChildren: './pages/edit-match/edit-match.module#EditMatchPageModule', canActivate: [AuthGuard] },

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
