import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../util/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  nome!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.nome = localStorage.getItem(Constants.NOME_KEY)!;
  }

  novaReceita(){
    this.router.navigate(['/receita/nova']);
  }

  listarReceitas(){
    this.router.navigate(['/receita']);
  }

  onInputChange(){
    localStorage.setItem(Constants.NOME_KEY, this.nome);
  }

}
