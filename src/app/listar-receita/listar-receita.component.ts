import { Component, OnInit } from '@angular/core';
import { Receita } from '../model/receita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-receita',
  templateUrl: './listar-receita.component.html',
  styleUrls: ['./listar-receita.component.css']
})
export class ListarReceitaComponent implements OnInit{

  listaReceita: Receita[] = [];
  receita: Receita = new Receita();

  constructor(private router: Router ) { }

  ngOnInit() {

    this.alimentarTabela();

  }

  alimentarTabela(){
   this.listaReceita = this.receita.listaReceitas();
  }

  editar(id: number){
    console.log(id);
    this.router.navigate(['/receita/editar', id]);
  }

  excluir(id: number){ 
    console.log(id);
  }

}
