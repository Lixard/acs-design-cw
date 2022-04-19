import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';
import { UserModel } from './_models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user!: UserModel;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.currentUser();
  }
}
