import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';

const authRouts: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent } 
];

@NgModule({
  imports: [
    RouterModule.forChild(authRouts)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}