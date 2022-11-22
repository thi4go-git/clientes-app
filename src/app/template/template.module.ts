import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent


  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent

  ]
})
export class TemplateModule { }
