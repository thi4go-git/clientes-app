import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/ServicoPrestado';


const API_URL = 'http://localhost:8080/api/servicos-prestados';



@Injectable({ providedIn: 'root' })
export class ServicoPrestadoService {

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {

    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    return this.http.post<ServicoPrestado>(API_URL, servicoPrestado, { headers });
  }

  listarTodos(): Observable<ServicoPrestado[]> {

    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    return this.http.get<ServicoPrestado[]>(API_URL, { headers });
  }

  buscarPorNomeClienteEMes(nome: string, mes: string): Observable<ServicoPrestado[]> {


    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes.toString());

    const URL = API_URL + "/filtro-parametros" + "?" + httpParams.toString();
    console.log(URL);

    return this.http.get<ServicoPrestado[]>(URL, { headers });
  }

}
