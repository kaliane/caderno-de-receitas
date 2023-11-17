import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaReceitaComponent } from './nova-receita/nova-receita.component';
import { HomeComponent } from './home/home.component';
import { ListarReceitaComponent } from './listar-receita/listar-receita.component';

const routes: Routes = [
  {path: 'receita/nova', component: NovaReceitaComponent},
  {path: '', component: HomeComponent},
  {path: 'receita', component: ListarReceitaComponent},
  {path: 'receita/editar/:id', component: NovaReceitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
