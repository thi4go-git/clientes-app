import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';



const API_URL = 'http://localhost:8080/api/clientes';





@Injectable({ providedIn: 'root' })
export class ClientesService {


  constructor(private http: HttpClient) {
  }

  salvar(cliente: Cliente): Observable<Cliente> {

    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }


    return this.http.post<Cliente>(API_URL, cliente, { headers });
  }

  listarClientes(): Observable<Cliente[]> {



    return this.http.get<Cliente[]>(API_URL);
  }


  obterPorId(id: number): Observable<Cliente> {

    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }

    return this.http.get<Cliente>(API_URL + "/" + id, { headers });
  }

  atualizarBody(cliente: Cliente): Observable<any> {
    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.put<any>(API_URL, cliente, { headers });

  }

  deletarPorId(id: number): Observable<any> {
    const tokenStr = localStorage.getItem('access_token');
    const token = JSON.parse(tokenStr);
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.delete<any>(API_URL + "/" + id, { headers });
  }


}
