import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { Router } from '@angular/router';
import { ReceitasPromiseService } from './receitas-promise.service';

@Injectable({
  providedIn: 'root'
})

export class ReceitaService {
  listaReceita: Receita[] = [];

  constructor(
    private router: Router,
    private receitasPromise: ReceitasPromiseService
  ) {
  }

  editarReceita(id: number) {
    this.router.navigate(['/receita/editar', id]);
  }

  voltarListaReceitas() {
    this.router.navigate(['/receita']);
  }

  salvar(receita: Receita): Promise<Receita> {
    /*this.listaReceita = WebStorageUtil.getArray(Constants.RECEITA_KEY);
    this.listaReceita.push(receita);
    WebStorageUtil.set(Constants.RECEITA_KEY, this.listaReceita);*/
    return this.receitasPromise.save(receita);
    
  }

  update(receita: Receita): Promise<Receita> {
    /*this.delete(receita.id);
    this.salvar(receita);*/
    return this.receitasPromise.update(receita);
  }

  delete(id: number): Promise<Receita> {
    /*this.listaReceita = WebStorageUtil.getArray(Constants.RECEITA_KEY);
    this.listaReceita = this.listaReceita.filter(receita => receita.id != id);
    WebStorageUtil.set(Constants.RECEITA_KEY, this.listaReceita);*/
    return this.receitasPromise.delete(id);
  }

  getReceitas(): Promise<Receita[]>{
    //return WebStorageUtil.getArray(Constants.RECEITA_KEY);
    return this.receitasPromise.findAll();
  }

  getReceitaById(id: number): Promise<Receita> {
    return this.receitasPromise.findById(id);
  }

  buscarNome(): string | null {
    return localStorage.getItem(Constants.NOME_KEY);
  }

}
