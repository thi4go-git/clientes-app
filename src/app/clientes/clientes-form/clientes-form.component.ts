
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: []
})
export class ClientesFormComponent implements OnInit {


  cliente: Cliente;
  success: string = '';
  errors: [];
  id: number;


  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
    this.errors = [];
  }

  ngOnInit(): void {
    this.success = '';
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro && parametro.id) {
        this.service.obterPorId(parametro.id).subscribe(response => {
          this.cliente = response;
        }, errorResponse => {
          this.errors = errorResponse.error.erros;
          this.success = 'ERRO';
        });
      }
    });
  }

  onSubmit() {

    if (this.cliente.id) {
      this.editarCliente();
    } else {
      this.salvarCliente();
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/list']);
  }

  salvarCliente() {
    this.service
      .salvar(this.cliente)
      .subscribe(resposta => {
        console.log(resposta);
        this.success = 'SUCESSO';
        this.cliente = resposta;
        this.errors = [];
      }, errorResponse => {
        this.errors = errorResponse.error.erros;
        this.success = 'ERRO';
      })
  }

  editarCliente() {
    this.service
      .atualizarBody(this.cliente)
      .subscribe(resposta => {
        console.log(resposta);
        this.success = 'SUCESSO';
      }, errorResponse => {
        this.errors = errorResponse.error.erros;
        this.success = 'ERRO';
      })
  }




}
