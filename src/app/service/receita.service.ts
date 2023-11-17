import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { Router } from '@angular/router';
import { ReceitasPromiseService } from './receitas-promise.service';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReceitaService {
  listaReceita: Receita[] = [];
  URL = 'http://localhost:3000/receitas'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private router: Router,
    private receitasPromise: ReceitasPromiseService,
    private httpClient: HttpClient
  ) {
  }

  editarReceita(id: number) {
    this.router.navigate(['/receita/editar', id]);
  }

  voltarListaReceitas() {
    this.router.navigate(['/receita']);
  }

  salvar(receita: Receita): Promise<Receita> {
    return this.receitasPromise.save(receita);
  }

  update(receita: Receita): Promise<Receita> {
    return this.receitasPromise.update(receita);
  }

  delete(id: number): Promise<Receita> {
    return this.receitasPromise.delete(id);
  }

  getReceitas(): Observable<Receita[]>{
    return this.httpClient.get<Receita[]>(this.URL);
  }

  getReceitaById(id: number): Observable<Receita[]> {
    const query: HttpParams = new HttpParams().set('id', id.toString());
    const options = id ? { params: query } : {};

    return this.httpClient.get<Receita[]>(this.URL, options);
  }

  buscarNome(): string | null {
    return localStorage.getItem(Constants.NOME_KEY);
  }

}
