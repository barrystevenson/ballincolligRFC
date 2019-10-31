import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home-tabs',
  templateUrl: './admin-home-tabs.page.html',
  styleUrls: ['./admin-home-tabs.page.scss'],
})
export class AdminHomeTabsPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logoutUser().then( () => {
    this.router.navigateByUrl('');
    });
  }

    goBack() {
     this.router.navigateByUrl('');
  }
}