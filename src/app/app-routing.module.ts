import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { RequestPageComponent } from './request-page/request-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContactPageComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPageComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactPageComponent
  },
  {
    path: 'payments',
    pathMatch: 'full',
    component: PaymentPageComponent
  },
  {
    path: 'requests',
    pathMatch: 'full',
    component: RequestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
