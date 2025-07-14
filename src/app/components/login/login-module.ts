import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login'; // componente standalone

const routes: Routes = [
  { path: '', component: Login } // Rota local deste módulo
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    Login, // IMPORTANDO o componente standalone direto aqui
  ]
})
export class LoginModule { }
