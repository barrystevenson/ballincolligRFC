import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../tab1/news.module#NewsPageModule'
          }
        ]
      },
      {
        path: 'fixtures',
        children: [
          {
            path: '',
            loadChildren: '../tab2/fixtures.module#FixturesPageModule'
          }
        ]
      },
      {
        path: 'players',
        children: [
          {
            path: '',
            loadChildren: '../tab3/players.module#PlayersPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/fixtures',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/fixtures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
