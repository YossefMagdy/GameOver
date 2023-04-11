
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';


import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { AuthGuard } from './Guards/auth.guard';
import { RestCodeComponent } from './Components/rest-code/rest-code.component';
import { ChangePassComponent } from './Components/change-pass/change-pass.component';
import { ForgetPassGuard } from './Guards/forget-pass.guard';









const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'Games',canActivate:[AuthGuard] ,loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule) },
  { path: 'Games',canActivate:[AuthGuard], loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule) },
  { path: 'Games',canActivate:[AuthGuard], loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule) },
  { path: 'Games', canActivate:[AuthGuard],loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule) },
  { path: 'Games', canActivate: [AuthGuard],loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule) },
  { path: 'ForgetPassword', component: ForgetPasswordComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'reset', canActivate: [ForgetPassGuard], component: RestCodeComponent },
  { path: 'ChangePassword', canActivate: [ForgetPassGuard], component: ChangePassComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
