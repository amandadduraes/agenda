import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PlanoAcaoComponent } from './plano-acao-component/plano-acao-component.component';
import { InicialComponent } from './inicial/inicial.component';

export const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'inicio', component: InicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pessoas', component: PessoasComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'plano-acao', component: PlanoAcaoComponent },
  { path: '**', redirectTo: 'inicio' }
];

