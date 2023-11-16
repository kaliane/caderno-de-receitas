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
export class NovaReceitaComponent implements OnInit{

  receita: Receita = new Receita();
  categorias!: string[];
  listaReceita: Receita[] = [];
  isEdit: boolean = false;
  nome!: string;
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

      let id = Number(idParam);
      this.receitaService.getReceitaById(id).subscribe({
        next: (receita) => {this.receita = receita[0];
        console.log(receita)
        },
        error: (error) => console.log(error)
      });

      this.isEdit = true;
    }

    if (this.receitaService.buscarNome() != null) {
      this.nome = this.receitaService.buscarNome()!;
    }

    this.categorias = ['Bolos', 'Bebidas', 'Carnes', 'Aves', 'Peixes', 'Massas', 'Saladas', 'Sopas', 'Molhos', 'Sobremesas'];
    
  }

  salvar(): void {
    if(this.receita.jaFeita == true){
      this.receita.avaliacao = this.avaliacao.getAvaliacao();
    }

    if (this.isEdit) {

      this.receitaService.update(this.receita).then(receita => {
        window.alert("Receita atualizada com sucesso!");
        this.receitaService.voltarListaReceitas();
      }).catch(erro => console.log(erro));

    } else {

      this.receitaService.salvar(this.receita).then(receita => {
        window.alert("Receita salva com sucesso!");
        this.receita = new Receita();
      })
      .catch(erro => console.log(erro));
    }

   
  }

  cancelar(): void {
    if (this.isEdit) {
      this.receitaService.voltarListaReceitas();
    } else {
      this.receita = new Receita();
    }
  }

}
