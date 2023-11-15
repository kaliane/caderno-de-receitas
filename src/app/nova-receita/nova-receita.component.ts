import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Receita } from '../model/receita';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacaoComponent } from '../avaliacao/avaliacao.component';
import { ReceitaService } from '../service/receita.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-nova-receita',
  templateUrl: './nova-receita.component.html',
  styleUrls: ['./nova-receita.component.css']
})
export class NovaReceitaComponent implements OnInit, AfterViewInit{

  receita: Receita = new Receita();
  categorias!: string[];
  listaReceita: Receita[] = [];
  isEdit: boolean = false;
  @ViewChild('avaliacao') avaliacao !: AvaliacaoComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receitaService: ReceitaService
  ) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    let idParam = this.route.snapshot.paramMap.get('id');
    
    if(idParam != null) {
      this.listaReceita = this.receitaService.getReceitas();
      let id = Number(idParam);
      this.receita = this.listaReceita.find(receita => receita.id == id)!;
      this.isEdit = true;
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

    if (this.isEdit) {
      this.receitaService.update(this.receita);
      this.router.navigate(['/receita']);
    } else {
      this.receita.id = this.receitaService.proximoId();
      this.receitaService.salvar(this.receita);
    }

    window.alert("Receita salva com sucesso!");
    this.receita = new Receita();
  }

  cancelar(): void {
    if (this.isEdit) {
      this.router.navigate(['/receita']);
    } else {
      this.receita = new Receita();
    }
  }

}
