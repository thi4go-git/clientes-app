import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
