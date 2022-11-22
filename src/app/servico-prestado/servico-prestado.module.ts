import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    RouterModule,
    FormsModule
  ], exports: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
