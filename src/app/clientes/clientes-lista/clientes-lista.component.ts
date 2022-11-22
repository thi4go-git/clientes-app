import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: []
})
export class ClientesListaComponent implements OnInit {


  clientes: Cliente[];
  clienteDeletar: Cliente;
  mensagemResposta: string;

  constructor(private service: ClientesService,
    private router: Router) {
    this.clientes = [];
  }

  ngOnInit(): void {
    this.service.listarClientes()
      .subscribe(resposta => {
        this.clientes = resposta;
      },
        erroResposta => this.mensagemResposta = 'ERRO');

  }

  novoCadastro() {
    this.router.navigate(['/clientes/form']);
  }

  selecionarClienteDeletar(cliente: Cliente) {
    this.clienteDeletar = cliente;
  }

  deletarCliente() {

    this.service
      .deletarPorId(this.clienteDeletar.id)
      .subscribe(
        resposta => {
          this.mensagemResposta = 'Sucesso ao deletar!'
          this.ngOnInit();
        },
        erroResposta => this.mensagemResposta = 'Erro ao deletar!'
      )

  }

}
