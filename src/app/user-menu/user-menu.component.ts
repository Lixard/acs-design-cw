import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserModel } from '../_models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.sass']
})
export class UserMenuComponent implements OnInit {

  user: UserModel | undefined;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser()
  }

  handleLogoutClick() {
    this.userService.logout();
    this.user = undefined;
    this.router.navigateByUrl('/login');
  }
}
