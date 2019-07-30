import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news/:id', loadChildren: './pages/news/news.module#NewsPageModule' },
  // { path: 'match-details/:id', loadChildren: './pages/match-details/match-details.module#MatchDetailsPageModule' },
  { path: 'match-details-standard/:id', loadChildren: './pages/match-details-standard/match-details-standard.module#MatchDetailsStandardPageModule' },
  { path: 'player-details/:id', loadChildren: './pages/player-details/player-details.module#PlayerDetailsPageModule' },  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
