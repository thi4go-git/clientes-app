import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { HomeCompComponent } from './home-comp/home-comp.component';

const routes: Routes = [
  {
    path: 'home', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', component: HomeCompComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
