import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news/:id', loadChildren: './pages/news/news.module#NewsPageModule' },
  // { path: 'match-details/:id', loadChildren: './pages/match-details/match-details.module#MatchDetailsPageModule' },
  { path: 'match-details-standard/:id', loadChildren: './pages/match-details-standard/match-details-standard.module#MatchDetailsStandardPageModule' },
  { path: 'player-details/:id', loadChildren: './pages/player-details/player-details.module#PlayerDetailsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'admin-home-tabs, loadChildren: './pages/admin-home-tabs/admin-home-tabs.module#AdminHomeTabsPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'admin-home', loadChildren: './pages/admin-home/admin-home.module#AdminHomePageModule', canActivate: [AuthGuard]  },
  { path: 'new-match', loadChildren: './pages/new-match/new-match.module#NewMatchPageModule', canActivate: [AuthGuard]  },
  { path: 'edit-match/:id', loadChildren: './pages/edit-match/edit-match.module#EditMatchPageModule', canActivate: [AuthGuard] }

  //{ path: 'admin-fixtures', loadChildren: './pages/admin-home/admin-fixtures/admin-fixtures.module#AdminFixturesPageModule' }
  //{ path: 'admin-players', loadChildren: './pages/admin-home/admin-players/admin-players.module#AdminPlayersPageModule' },
  //{ path: 'admin-admins', loadChildren: './pages/admin-home/admin-admins/admin-admins.module#AdminAdminsPageModule' },


  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
