import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: []
})
export class ServicoPrestadoListaComponent implements OnInit {


  servicos: ServicoPrestado[];
  mensagemResposta: string;

  nome: string = "";
  mes: string = "";
  meses: string[];
  msgLista: string;

  constructor(private servicoPrestadoService: ServicoPrestadoService,
    private router: Router) {
    this.servicos = [];
    this.mensagemResposta = '';
    this.msgLista = '';

    this.meses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  }

  ngOnInit(): void {
    this.msgLista = '';
    this.servicoPrestadoService.listarTodos()
      .subscribe(resposta => {
        this.servicos = resposta;
      }, errorResponse => {
        this.mensagemResposta = 'ERRO';
        console.log(errorResponse);
      }
      );
  }

  consultarServicos() {
    this.servicoPrestadoService.buscarPorNomeClienteEMes(this.nome, this.mes)
      .subscribe(resposta => {
        this.servicos = resposta;
        if (this.servicos.length < 1) {
          this.msgLista = 'Sem registros para a Consulta!';
        } else {
          this.msgLista = '';
        }
      }, errorResponse => {
        console.log(errorResponse);
      }
      );
  }

  lancarNovoServico() {
    this.router.navigate(['/servico-prestado/form']);
  }

}
