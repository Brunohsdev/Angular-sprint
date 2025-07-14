import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { Perfil } from './components/perfil/perfil';


export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
    path: 'login',
    loadChildren: () => import('./components/login/login-module').then(m => m.LoginModule) // Carregamento preguiçoso do módulo de login
  },
    {path: 'home', component: Home},
    {path: 'dashboard', component: Dashboard },
    {path: 'perfil', component: Perfil},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
