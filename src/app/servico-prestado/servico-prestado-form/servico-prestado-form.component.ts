import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: []
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[];
  servico: ServicoPrestado;
  success: string;
  errors: [];

  constructor(private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService) {
    this.servico = new ServicoPrestado();
    this.success = '';
    this.errors = [];
  }

  ngOnInit(): void {
    this.clienteService.listarClientes()
      .subscribe(
        response => { this.clientes = response }
        , errorResponse => {
          this.success = 'ERRO';
          this.errors = errorResponse.error.erros;
        }
      );
  }

  onSubmit() {
    this.salvarServico();
  }


  salvarServico() {
    this.servicoPrestadoService
      .salvar(this.servico)
      .subscribe(resposta => {
        console.log(resposta);
        this.success = 'SUCESSO';
        this.servico = resposta;
        this.errors = [];
      }, errorResponse => {
        this.success = 'ERRO';
        this.errors = errorResponse.error.erros;
      })
  }

}
