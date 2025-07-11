import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { Perfil } from './components/perfil/perfil';


export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: Login},
    {path: 'home', component: Home},
    {path: 'dashboard', component: Dashboard },
    {path: 'perfil', component: Perfil},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
