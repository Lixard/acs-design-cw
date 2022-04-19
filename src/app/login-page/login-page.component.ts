import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { UserModel } from '../_models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  hidePassword = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login(form: UserModel): void {
    if (form.userType === 'inspector') {
      this.loginAsInspector()
    } else if (form.userType === 'client') {
      this.loginAsClient()
    }
  }

  loginAsClient() {
    this.router.navigateByUrl('/payments')
  }

  loginAsInspector() {
    this.router.navigateByUrl('/requests')
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      userType: this.formBuilder.control('client', [Validators.required]),
      phone: this.formBuilder.control(undefined, [Validators.required]),
      password: this.formBuilder.control(undefined, [Validators.required])
    });
  }
}
