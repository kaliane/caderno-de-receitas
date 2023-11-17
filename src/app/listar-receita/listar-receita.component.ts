import { ReceitaService } from './../service/receita.service';
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
  nome!: string;

  constructor(private router: Router,
    private receitaService: ReceitaService ) { }

  ngOnInit() {

    this.alimentarTabela();
    if (this.receitaService.buscarNome() != null) {
      this.nome = this.receitaService.buscarNome()!;
    }

  }

  alimentarTabela(){
    this.receitaService.getReceitas().subscribe({
      next: (receitas) => {this.listaReceita = receitas;
      },
      error: (error) => console.log(error)
    });
  }

  editar(id: number){
    this.receitaService.editarReceita(id);
  }

  excluir(id: number){ 
    console.log(id);
    let comfirma = window.confirm("Deseja realmente excluir?");
    if (comfirma) {
      this.receitaService.delete(id).then(receita => {
        this.alimentarTabela();
      }).catch(erro => console.log(erro));
    }
  }

}
