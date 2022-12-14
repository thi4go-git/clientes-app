import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';


const routes: Routes = [

  {
    path: 'servico-prestado', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'form', component: ServicoPrestadoFormComponent },
      { path: 'list', component: ServicoPrestadoListaComponent },
      { path: '', redirectTo: '/servico-prestado/list', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
