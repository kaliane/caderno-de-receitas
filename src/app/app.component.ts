import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro de Receitas';

  novaReceita(){
    console.log('Nova Receita');
    alert('Nova Receita');
  }

  listarReceitas(){
    alert('Listar Receitas');
  }
}
