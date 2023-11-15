import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})

export class BotaoComponent implements OnInit {

  @Input() nome: string = 'OK';
  @Input() desativar: boolean = false;
  @Input() tipo: string = 'button';
  @Output() acao = new EventEmitter();

  ngOnInit(): void {
    
  }

  acaoBotao() {
    console.log('Botão clicado');
    this.acao.emit();
  }

}
