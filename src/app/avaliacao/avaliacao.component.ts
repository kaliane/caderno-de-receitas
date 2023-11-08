import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {

  nota: string = "0";

  getAvaliacao(): number {
    return Number(this.nota);
  }

  setAvaliacao(nota: number): void {
    console.log(nota);
    this.nota = nota.toString();
  }

}
