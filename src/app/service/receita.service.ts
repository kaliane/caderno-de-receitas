import { Injectable } from '@angular/core';
import { Receita } from '../model/receita';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})

export class ReceitaService {
  listaReceita: Receita[] = [];

  constructor() {
  }

  salvar(receita: Receita) {
    this.listaReceita = WebStorageUtil.getArray(Constants.RECEITA_KEY);
    console.log(this.listaReceita);
    this.listaReceita.push(receita);
    WebStorageUtil.set(Constants.RECEITA_KEY, this.listaReceita);
  }

  update(receita: Receita) {
    this.delete(receita.id);
    this.salvar(receita);
  }

  delete(id: number): boolean {
    this.listaReceita = WebStorageUtil.getArray(Constants.RECEITA_KEY);
    this.listaReceita = this.listaReceita.filter(receita => receita.id != id);
    WebStorageUtil.set(Constants.RECEITA_KEY, this.listaReceita);
    return true;
  }

  getReceitas(): Receita[] {
    return WebStorageUtil.getArray(Constants.RECEITA_KEY);
  }

  proximoId(): number {
    this.listaReceita = WebStorageUtil.getArray(Constants.RECEITA_KEY);
    let id: number = 0;
    if (this.listaReceita.length > 0) {
      for (let i = 0; i < this.listaReceita.length; i++) {
        if (this.listaReceita[i].id > id) {
          id = this.listaReceita[i].id;
        }
      }
    }
    return id +1;
  }
}
