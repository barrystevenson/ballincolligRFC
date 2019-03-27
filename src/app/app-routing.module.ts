import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news/:id', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'match-details/:id', loadChildren: './pages/match-details/match-details.module#MatchDetailsPageModule' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
