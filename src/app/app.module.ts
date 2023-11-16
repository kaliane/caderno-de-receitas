import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FooterComponent } from './footer/footer.component';
import { NovaReceitaComponent } from './nova-receita/nova-receita.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListarReceitaComponent } from './listar-receita/listar-receita.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    CabecalhoComponent,
    FooterComponent,
    NovaReceitaComponent,
    HomeComponent,
    ListarReceitaComponent,
    AvaliacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
