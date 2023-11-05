import { Component, OnInit } from '@angular/core';
import { Receita } from '../model/receita';

@Component({
  selector: 'app-nova-receita',
  templateUrl: './nova-receita.component.html',
  styleUrls: ['./nova-receita.component.css']
})
export class NovaReceitaComponent implements OnInit{

  receita: Receita = new Receita();
  categorias!: string[];

  constructor() { }

  ngOnInit(): void {
    this.categorias = ['Bolos', 'Carnes', 'Aves', 'Peixes', 'Massas', 'Saladas', 'Sopas', 'Molhos', 'Sobremesas'];
    
  }

  salvar(): void {
    console.log(this.receita);
  }

  cancelar(): void {
    this.receita = new Receita();
  }

}
