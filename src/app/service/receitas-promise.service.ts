import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasPromiseService {
  URL = 'http://localhost:3000/receitas'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  save(receita: Receita): Promise<Receita> {
    return lastValueFrom(this.httpClient.post<Receita>(this.URL, receita, this.httpOptions));
  }

  update(receita: Receita): Promise<Receita> {
    return lastValueFrom(this.httpClient.put<Receita>(`${this.URL}/${receita.id}`, receita, this.httpOptions));
  }

  findAll(): Promise<Receita[]> {
    return lastValueFrom(this.httpClient.get<Receita[]>(this.URL));
  }

  findById(id: number): Promise<Receita> {
    return lastValueFrom(this.httpClient.get<Receita>(`${this.URL}/${id}`));
  }

  delete(id: number): Promise<Receita> {
    return lastValueFrom(this.httpClient.delete<Receita>(`${this.URL}/${id}`));
  }
}
