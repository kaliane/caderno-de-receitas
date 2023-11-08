import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Receita } from '../model/receita';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoComponent } from '../avaliacao/avaliacao.component';

@Component({
  selector: 'app-nova-receita',
  templateUrl: './nova-receita.component.html',
  styleUrls: ['./nova-receita.component.css']
})
export class NovaReceitaComponent implements OnInit, AfterViewInit{

  receita: Receita = new Receita();
  categorias!: string[];
  listaReceita: Receita[] = [];
  @ViewChild('avaliacao') avaliacao !: AvaliacaoComponent;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    this.listaReceita = this.receita.listaReceitas();
    
    
    if(idParam != null){
      let id = Number(idParam);
      this.receita = this.listaReceita.find(receita => receita.id == id)!;
    }

    this.categorias = ['Bolos', 'Bebidas', 'Carnes', 'Aves', 'Peixes', 'Massas', 'Saladas', 'Sopas', 'Molhos', 'Sobremesas'];
    
  }

  ngAfterViewInit(): void {
    if(this.receita.jaFeita == true){
      console.log(this.receita.avaliacao);
      this.avaliacao.setAvaliacao(this.receita.avaliacao);
    }
  }

  salvar(): void {
    if(this.receita.jaFeita == true){
      this.receita.avaliacao = this.avaliacao.getAvaliacao();
    }
    console.log(this.receita);
  }

  cancelar(): void {
    this.receita = new Receita();
  }

}
