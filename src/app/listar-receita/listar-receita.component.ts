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
  receita: Receita = new Receita();

  constructor(private router: Router,
    private receitaService: ReceitaService ) { }

  ngOnInit() {

    this.alimentarTabela();

  }

  alimentarTabela(){
   this.listaReceita = this.receitaService.getReceitas();
  }

  editar(id: number){
    console.log(id);
    this.router.navigate(['/receita/editar', id]);
  }

  excluir(id: number){ 
    console.log(id);
    let comfirma = window.confirm("Deseja realmente excluir?");
    if (comfirma) {
      this.receitaService.delete(id);
      this.alimentarTabela();
    }
  }

}
