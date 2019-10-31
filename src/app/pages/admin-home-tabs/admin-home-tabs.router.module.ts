import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { IonicModule } from '@ionic/angular';

import { AdminHomeTabsPage } from './admin-home-tabs.page';



const routes: Routes = [
  {
    path: 'admin-home-tabs',
    component: AdminHomeTabsPage,
    children: [
      { path: 'admin-fixtures', loadChildren: '../admin-fixtures/admin-fixtures.module#AdminFixturesPageModule'},
      { path: 'admin-players', loadChildren: '../admin-players/admin-players.module#AdminPlayersPageModule'},
      { path: 'admin-admins', loadChildren: '../admin-admins/admin-admins.module#AdminAdminsPageModule'},
    ]
  },
  {
    path: '',
    redirectTo: '/admin-home/admin-fixtures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    //CommonModule,
    //FormsModule,
    //IonicModule,
    RouterModule.forChild(routes) 
  ],
  exports: [RouterModule]
  //declarations: [AdminHomeTabsPage]
})
export class AdminHomeTabsPageRoutingModule {}
